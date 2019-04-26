package com.expresms.user;

import org.springframework.data.repository.CrudRepository;

import java.util.List;



public interface UserRepository extends CrudRepository<User, String> {
    User findByEmail(String email);
}