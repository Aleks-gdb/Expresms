package com.expresms.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository repository;

    @Autowired
    public UserDetailsServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        User currUser = repository.findByEmail(email);

        UserDetails user = new org.springframework.security.core.userdetails.User(email, currUser.getPasswordHash(), true,
                true, true, true, AuthorityUtils.createAuthorityList(currUser.getRole()));

        System.out.println("ROLE: " + currUser.getRole());
        return user;
    }


}
