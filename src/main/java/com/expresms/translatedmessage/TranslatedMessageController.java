package com.expresms.translatedmessage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class TranslatedMessageController {

    @Autowired
    private TranslatedMessageService translatedMessageService;

    @ResponseBody
    @RequestMapping("/messages")
    public List<TranslatedMessage> getAllMessages(){
        return translatedMessageService.getAllMessages();
    }

    @ResponseBody
    @RequestMapping("/messages/{id}")
    public TranslatedMessage getMessage(@PathVariable String id) {
        return translatedMessageService.getMessage(id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/messages")
    public void addMessage(@RequestBody TranslatedMessage translatedMessage) {
        translatedMessageService.addMessage(translatedMessage);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/messages/{id}")
    public void updateMessage(@RequestBody TranslatedMessage translatedMessage, @PathVariable String id) {
        translatedMessageService.updateMessage(id, translatedMessage);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/messages/{id}")
    public void deleteMessage(@PathVariable String id) {
        translatedMessageService.deleteMessage(id);
    }

    @RequestMapping(method=RequestMethod.POST, value="/messages/{id}")
    public void sendMessage(@PathVariable String id) {
        TranslatedMessage translatedMessage = translatedMessageService.getMessage(id);
        translatedMessageService.sendMessage(translatedMessage);
    }
}
