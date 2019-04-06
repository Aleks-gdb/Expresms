package com.expresms.message;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;


public interface MessageRepository extends CrudRepository<Message, String> {
    List<Message> findAllByUserId(String id);
    Optional<Message> findById(Long id);
    void deleteById(Long id);
}
