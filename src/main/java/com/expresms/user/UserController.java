package com.expresms.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String,String> input) {
        String password = input.get("password");
        String email = input.get("email");
        User usr = null;
        if (userRepository.findByEmail(email) == null) {
            BCryptPasswordEncoder bc = new BCryptPasswordEncoder();
            String pwd = bc.encode(password);
            usr = new User(email, pwd, "USER");
            userRepository.save(usr);
        }
        else {
            return new ResponseEntity<>("Email already taken", HttpStatus.CONFLICT);
        }
        System.out.println(userRepository.findAll());
        return new ResponseEntity<>("User created", HttpStatus.OK);
    }
}
