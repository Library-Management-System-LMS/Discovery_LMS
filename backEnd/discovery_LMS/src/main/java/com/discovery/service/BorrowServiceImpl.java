package com.discovery.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.discovery.custom_exceptions.ResourceNotFoundException;
import com.discovery.dao.BookDao;
import com.discovery.dao.BorrowDao;
import com.discovery.dao.UserDao;
import com.discovery.dto.AddAuthorDTO;
import com.discovery.dto.AddBookDTO;
import com.discovery.dto.AddBorrowDTO;
import com.discovery.dto.ApiResponse;
import com.discovery.dto.BookDetailsDTO;
import com.discovery.dto.BorrowDetailsDTO;
import com.discovery.entities.Author;
import com.discovery.entities.Book;
import com.discovery.entities.Borrow;
import com.discovery.entities.Category;
import com.discovery.entities.User;

@Service
@Transactional
public class BorrowServiceImpl {

	@Autowired
	private BorrowDao borrowDao;
	
	@Autowired
	private BookDao bookDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	
	public List<BorrowDetailsDTO> getBorrowList(){
		
		List<Borrow> newList = borrowDao.findAll();
		
		List<BorrowDetailsDTO> list = new ArrayList<>();
		for(Borrow b : newList) {
			BorrowDetailsDTO dto = new BorrowDetailsDTO(b.getId(),b.getBook().getTitle(),b.getUser().getFirstName(),
					b.getStatus(), b.getBorrowDate(), b.getReturnDate());
			String name = b.getUser().getFirstName() + " " + b.getUser().getLastName(); 
			dto.setUserName(name);
			list.add(dto);
		}
		return list;
	}
	
	
	public ApiResponse addNewBorrow(AddBorrowDTO dto) {

		// 1. get book from it's id
			Book book = bookDao.findById(dto.getBookId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid book id !!!!"));
		
		// 2. get User from it's id
			User user = userDao.findById(dto.getUserId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid book id !!!!"));
			
		
		
			Borrow borrow= mapper.map(dto, Borrow.class);
		
		// 3. borrow 1<--->* book 
			borrow.setBook(book);
		
		// 4. borrow 1<--->* user
			borrow.setUser(user);;
		
		// 5. save book post
			Borrow persistentBorrow = borrowDao.save(borrow);
		
		return new ApiResponse("New borrow added with ID=" + persistentBorrow.getId());
	}
}
