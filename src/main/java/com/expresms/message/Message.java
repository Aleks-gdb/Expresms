import com.expresms.user.User;

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
}
