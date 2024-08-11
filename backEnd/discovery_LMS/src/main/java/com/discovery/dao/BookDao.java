package com.discovery.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.discovery.dto.BookDetailsDTO;
import com.discovery.entities.Book;

public interface BookDao extends JpaRepository<Book,Long> {
	
	boolean existsByTitle(String bookTitle);
	
	Optional<Book> findByTitle(String bookName);
	
	//get books + authors details using custom query
	@Query("SELECT b FROM Book b LEFT JOIN FETCH b.authors LEFT JOIN FETCH b.bookCategory")
	List<Book>getBookAndAuthors();
	//select b from Book b left join fetch b.authors where b.id =:id
	@Query("select b from Book b left join fetch b.bookCategory")
	List<Book>getBookAndCategory();
	
}
