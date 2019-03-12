package com.expresms.translatedmessage;

import com.twilio.Twilio;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.*;

import java.util.ArrayList;
import java.util.List;



@Service
public class TranslatedMessageService {

    @Value("${TWILIO_NUMBER}")
    private String FROM;
    @Value("${ACCOUNT_SID}")
    private String ACCOUNT_SID;
    @Value("${AUTH_TOKEN}")
    private String AUTH_TOKEN;

    @Autowired
    private TranslatedMessageRepository translatedMessageRepository;

    public List<TranslatedMessage> getAllMessages() {
        List<TranslatedMessage> translatedMessages = new ArrayList<>();
        translatedMessageRepository.findAll()
        .forEach(translatedMessages::add);
        return translatedMessages;
    }

    public TranslatedMessage getMessage(String id) {
        return translatedMessageRepository.findById(id).orElse(null);
    }

    public void addMessage(TranslatedMessage translatedMessage) {
        translatedMessageRepository.save(translatedMessage);
    }

    public void updateMessage(String id, TranslatedMessage translatedMessage){
        if(translatedMessageRepository.findById(id).orElse(null) != null) {
            translatedMessage.setId(id);
            translatedMessageRepository.save(translatedMessage);
        }
    }

    public void deleteMessage(String id) {
        translatedMessageRepository.deleteById(id);
    }

    public void sendMessage(TranslatedMessage translatedMessage) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN );

        com.twilio.rest.api.v2010.account.Message mMessage = com.twilio.rest.api.v2010.account.Message
                .creator(new PhoneNumber(translatedMessage.getNumber()), // to
                        new PhoneNumber(FROM), // from
                        translatedMessage.getText())
                .create();

        System.out.println(mMessage.getSid());
        addMessage(translatedMessage);
    }
}
