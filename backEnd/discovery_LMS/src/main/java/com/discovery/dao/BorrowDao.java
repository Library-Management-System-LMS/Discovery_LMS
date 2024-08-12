package com.discovery.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discovery.entities.Author;
import com.discovery.entities.Book;
import com.discovery.entities.Borrow;
import com.discovery.entities.User;

public interface BorrowDao extends JpaRepository<Borrow,Long> {
	
//	boolean existsByAuthorName(String authorName);
	
//	Optional<Author> findByAuthorName(String authorName);
	
	Optional<Borrow> findByUser(User user);
	
	Optional<Borrow> findByUserAndBook(User user, Book book);
}
