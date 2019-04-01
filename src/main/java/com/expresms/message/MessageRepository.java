package com.expresms.message;

import org.springframework.data.repository.CrudRepository;


public interface MessageRepository extends CrudRepository<Message, String> {
}
