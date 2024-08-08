package com.discovery.dto;

import java.util.Collection;
import java.util.List;

import com.discovery.entities.Author;
import com.discovery.entities.Category;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookDetailsDTO {

	private Long BookId;
	
	private String bookTitle;
	
	private String description;
	
	private int quantity;
	
//	private Category category;
//	
//	private Collection<Author> authors;
//
//	public BookDetailsDTO(Long bookId, String bookTitle, String description, int quantity) {
//		super();
//		BookId = bookId;
//		this.bookTitle = bookTitle;
//		this.description = description;
//		this.quantity = quantity;
//	}
	
	
}
