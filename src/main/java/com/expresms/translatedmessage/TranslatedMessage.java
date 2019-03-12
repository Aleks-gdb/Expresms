package com.expresms.translatedmessage;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TranslatedMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String phoneNumber;
    private String language;
    private String timeStamp;
    private String text;

    public TranslatedMessage() {}

    public TranslatedMessage(String number, String id, String text, String language) {
        this.phoneNumber = number;
        this.id = id;
        this.language = language;
        this.text = text;
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
}
