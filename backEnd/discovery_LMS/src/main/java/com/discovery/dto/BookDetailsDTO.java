package com.discovery.dto;

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
}
