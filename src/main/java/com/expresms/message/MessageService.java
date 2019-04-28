package com.expresms.message;

import com.twilio.Twilio;
import com.twilio.type.PhoneNumber;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.auth.DefaultAWSCredentialsProviderChain;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.translate.AmazonTranslate;
import com.amazonaws.services.translate.AmazonTranslateClient;
import com.amazonaws.services.translate.AmazonTranslateClientBuilder;
import com.amazonaws.services.translate.model.TranslateTextRequest;
import com.amazonaws.services.translate.model.TranslateTextResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
@CrossOrigin(origins = "http://localhost:3001")
public class MessageService {

    Map<String, String> languages = new HashMap<String, String>() {{
        put("Arabic", "ar");
        put("Chinese(Simpl.)", "zh");
        put("Chinese(Trad.)", "zh-TW");
        put("Czech", "cs");
        put("Danish", "da");
        put("Dutch", "nl");
        put("English", "en");
        put("Finnish", "fi");
        put("French", "fr");
        put("German", "de");
        put("Hebrew", "he");
        put("Indonesian", "id");
        put("Italian", "it");
        put("Japanese", "ja");
        put("Korean", "ko");
        put("Polish", "pl");
        put("Portugese", "pt");
        put("Russian", "ru");
        put("Spanish", "es");
        put("Swedish", "sv");
        put("Turkish", "tr");
    }};
    private static final String REGION = "us-west-2";
    @Value("${TWILIO_NUMBER}")
    private String FROM;
    @Value("${ACCOUNT_SID}")
    private String ACCOUNT_SID;
    @Value("${AUTH_TOKEN}")
    private String AUTH_TOKEN;
    @Value("${ACCESS_KEY}")
    private String ACCESS_KEY;
    @Value("${SECRET_KEY}")
    private String SECRET_KEY;

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAllMessages(String email) {
        List<Message> messages = messageRepository.findAllByUserEmail(email);
        return messages;
    }

    public Message getMessage(Long id) {
        return messageRepository.findById(id).orElse(null);
    }

    public void addMessage(Message message) {
        messageRepository.save(message);
    }

    public void updateMessage(Long id, Message message){
        if(messageRepository.findById(id).orElse(null) != null) {
            message.setId(id);
            messageRepository.save(message);
        }
    }


    public TranslateTextResult awsTranslate(String text, String language) {
        AWSCredentials awsCreds = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
        System.out.println("AWSCRedentials created " + awsCreds.getAWSAccessKeyId());
        AmazonTranslate translate = AmazonTranslateClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .withRegion(REGION)
                .build();
        System.out.println(text);
        TranslateTextRequest request = new TranslateTextRequest()
                .withText(text)
                .withSourceLanguageCode("auto")
                .withTargetLanguageCode(languages.get(language));
        TranslateTextResult result  = translate.translateText(request);
        System.out.println(result);
        return result;
    }

    public void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }

    public void sendMessage(Message message) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN );

        com.twilio.rest.api.v2010.account.Message mMessage = com.twilio.rest.api.v2010.account.Message
                .creator(new PhoneNumber("+1" + message.getNumber()), // to
                        new PhoneNumber(FROM), // from
                        message.getTranslatedText())
                .create();

        System.out.println(mMessage.getSid());
    }
}
