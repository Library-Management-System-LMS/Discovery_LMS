package com.discovery.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discovery.entities.Book;

public interface BookDao extends JpaRepository<Book,Long> {
	
	boolean existsByTitle(String bookTitle);
	
	Optional<Book> findByTitle(String bookName);

}
