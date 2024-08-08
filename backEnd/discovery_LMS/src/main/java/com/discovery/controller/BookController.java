package com.discovery.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.discovery.custom_exceptions.ApiException;
import com.discovery.dto.AddBookDTO;
import com.discovery.dto.ApiResponse;
import com.discovery.dto.BookDetailsDTO;
import com.discovery.entities.Book;
import com.discovery.service.BookServiceImpl;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@CrossOrigin
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	private BookServiceImpl bookService;
	
	@GetMapping
	@Operation(description = "get list of Books")
	public ResponseEntity<?> listAllBooks() {
//		System.out.println("in list");
		List<BookDetailsDTO> list = bookService.getBookList();
		
		if(list.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiException("List is empty"));
		
		return ResponseEntity.status(HttpStatus.OK).body(list);
	}
	
	
	@PostMapping
	@Operation(description = "add New Book")
	public ResponseEntity<?> addBook(@RequestBody @Valid AddBookDTO book) {
		System.out.println("in add book " + book);
		
		try {
			// invoke service layer
			return ResponseEntity.status(HttpStatus.CREATED).body(bookService.addNewBook(book));
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}

}
