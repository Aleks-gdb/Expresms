package com.expresms.message;

import java.security.Principal;
import java.util.List;
import java.util.Map;

import com.amazonaws.services.translate.model.TranslateTextResult;
import com.expresms.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/messages")
    public List<Message> getAllMessages(Principal principal){

        System.out.println(principal.getName());
        return messageService.getAllMessages(principal.getName());
    }

    @GetMapping("/messages/{id}")
    public Message getMessage(@PathVariable Long id) {
        return messageService.getMessage(id);
    }

    @PostMapping("/messages")
    public void addMessage(@RequestBody Message message) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        message.setUser(userRepository.findByEmail(auth.getName()));
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
    public void deleteMessage(@PathVariable Long id) {
        messageService.deleteMessage(id);
    }

    @PostMapping("/")
    public void sendMessage(@RequestBody Message message) {
        messageService.sendMessage(message);
    }
}
