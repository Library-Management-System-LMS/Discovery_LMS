package com.discovery.dto;



import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.discovery.entities.Book;
import com.discovery.entities.BorrowStatus;
import com.discovery.entities.User;

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
public class BorrowDetailsDTO {
	
	
	 private Long id;
	 
	 private String bookName;
	 
	 private String userName;
	 
	 private BorrowStatus status;
	 
	 private LocalDate borrowDate;
	 
	 private LocalDate returnDate;
	 
	 
}
