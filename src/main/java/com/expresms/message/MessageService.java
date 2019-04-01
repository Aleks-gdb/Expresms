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

import java.util.ArrayList;
import java.util.List;



@Service
public class MessageService {

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

    public List<Message> getAllMessages() {
        List<Message> messages = new ArrayList<>();
        messageRepository.findAll()
        .forEach(messages::add);
        return messages;
    }

    public Message getMessage(String id) {
        return messageRepository.findById(id).orElse(null);
    }

    public void addMessage(Message message) {
        messageRepository.save(message);
    }

    public void updateMessage(String id, Message message){
        if(messageRepository.findById(id).orElse(null) != null) {
            message.setId(id);
            messageRepository.save(message);
        }
    }

    public String awsTranslate(String text, String language) {
        AWSCredentials awsCreds = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
        System.out.println("AWSCRedentials created " + awsCreds.getAWSAccessKeyId());
        AmazonTranslate translate = AmazonTranslateClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .withRegion("us-west-2")
                .build();
        System.out.println(text);
        TranslateTextRequest request = new TranslateTextRequest()
                .withText(text)
                .withSourceLanguageCode("en")
                .withTargetLanguageCode(language);
        System.out.println("Here");
        TranslateTextResult result  = translate.translateText(request);
        System.out.println(result);
        return result.getTranslatedText();
    }

    public void deleteMessage(String id) {
        messageRepository.deleteById(id);
    }

    public void sendMessage(Message message) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN );

        com.twilio.rest.api.v2010.account.Message mMessage = com.twilio.rest.api.v2010.account.Message
                .creator(new PhoneNumber(message.getNumber()), // to
                        new PhoneNumber(FROM), // from
                        message.getText())
                .create();

        System.out.println(mMessage.getSid());
        addMessage(message);
    }
}
