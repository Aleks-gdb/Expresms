package com.expresms.message;

import java.util.List;
import java.util.Map;

import com.expresms.user.User;
import com.expresms.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import org.springframework.security.oauth2.core.user.OAuth2User;

@RestController
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/messages")
    public Collection<Message> getAllMessages(Principal principal){
        return messageService.getAllMessages(principal.getName());
    }

    @GetMapping("/messages/{id}")
    public ResponseEntity<?> getMessage(@PathVariable Long id) {
        Optional<Message> message = messageService.getMessage(id);
        return message.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/messages")
    public ResponseEntity<Message> addMessage(@Valid @RequestBody Message message,
                                              @AuthenticationPrincipal OAuth2User principal) throws URISyntaxException{
        Map<String, Object> properties = principal.getAttributes();
        String userId = properties.get("id").toString();
        Optional<User> user = userRepository.findById(userId);
        message.setUser(user.orElse(new User(userId, properties.get("name").toString(), properties.get("email").toString())));
        Message result = messageService.addMessage(message);
        return ResponseEntity.created(new URI("/message/" + result.getId()))
                .body(result);
    }
    @PutMapping("/")
    public String translateMessage(@RequestBody Map<String, String> input) {
        return messageService.awsTranslate(input.get("text"), input.get("language"));
    }

    @DeleteMapping("/messages/{id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id) {
        messageService.deleteMessage(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/")
    public ResponseEntity<?> sendMessage(@RequestBody Message message) {
        messageService.sendMessage(message);
        return ResponseEntity.ok().build();
    }
}
