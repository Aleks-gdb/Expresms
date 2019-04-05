package com.expresms.message;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface MessageRepository extends CrudRepository<Message, String> {
    Optional<Message> findById(Long id);
}
