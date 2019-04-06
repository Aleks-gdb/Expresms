package com.expresms.message;

import com.expresms.user.*;
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
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;



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

    public Collection<Message> getAllMessages(String id) {
        return messageRepository.findAllByUserId(id);
    }

    public Optional<Message> getMessage(Long id) {
        return messageRepository.findById(id);
    }

    public Message addMessage(Message message) {
        return messageRepository.save(message);
    }


    public String awsTranslate(String text, String language) {
        AWSCredentials awsCreds = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
        System.out.println("AWSCRedentials created " + awsCreds.getAWSAccessKeyId());
        AmazonTranslate translate = AmazonTranslateClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .withRegion(REGION)
                .build();
        System.out.println(text);
        TranslateTextRequest request = new TranslateTextRequest()
                .withText(text)
                .withSourceLanguageCode("en")
                .withTargetLanguageCode(language);
        TranslateTextResult result  = translate.translateText(request);
        System.out.println(result);
        return result.getTranslatedText();
    }

    public void deleteMessage(Long id) {
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
