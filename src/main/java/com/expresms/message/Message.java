package com.expresms.message;

import com.expresms.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.*;

@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String phoneNumber;
    private String language;
    private String timeStamp;
    private String text;
    private String translatedText;
    @ManyToOne
    @JsonIgnore
    private User user;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setTranslatedText(String translatedText) {
        this.translatedText = translatedText;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
