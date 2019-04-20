package com.expresms.message;

import java.util.List;
import java.util.Map;

import com.amazonaws.services.translate.model.TranslateTextResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/messages")
    public List<Message> getAllMessages(){
        return messageService.getAllMessages();
    }

    @GetMapping("/messages/{id}")
    public Message getMessage(@PathVariable String id) {
        return messageService.getMessage(id);
    }

    @PostMapping("/messages")
    public void addMessage(@RequestBody Message message) {
        messageService.addMessage(message);
    }

    @PutMapping("/")
    public TranslateTextResult translateMessage(@RequestBody Map<String, String> input) {
        return messageService.awsTranslate(input.get("text"), input.get("language"));
    }

   @PutMapping("/messages/{id}")
    public void updateMessage(@RequestBody Message message, @PathVariable Long id) {
        messageService.updateMessage(id, message);
    }

    @DeleteMapping("/messages/{id}")
    public void deleteMessage(@PathVariable String id) {
        messageService.deleteMessage(id);
    }

    @PostMapping("/")
    public void sendMessage(@RequestBody Message message) {
        messageService.sendMessage(message);
    }
}
