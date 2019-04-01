package com.expresms.message;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String phoneNumber;
    private String language;
    private String timeStamp;
    private String text;
    private String translatedText;

    public Message() {}

    public Message(String number, String text, String translatedText, String language, String timeStamp) {
        this.phoneNumber = number;
        this.language = language;
        this.text = text;
        this.translatedText = translatedText;
        this.timeStamp = timeStamp;
    }

    public String getNumber() {
        return phoneNumber;
    }

    public void setNumber(String number) {
        this.phoneNumber = number;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getTimeStamp() { return timeStamp; }

    public String getText() { return text; }

    public String getTranslatedText() { return translatedText; }
}
