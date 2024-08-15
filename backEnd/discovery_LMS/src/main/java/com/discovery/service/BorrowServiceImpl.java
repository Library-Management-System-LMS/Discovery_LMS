package com.discovery.service;
import static com.discovery.constants.Constants.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.discovery.custom_exceptions.ApiException;
import com.discovery.custom_exceptions.ResourceNotFoundException;
import com.discovery.dao.BookDao;
import com.discovery.dao.BorrowDao;
import com.discovery.dao.FineDao;
import com.discovery.dao.UserDao;
import com.discovery.dto.AddAuthorDTO;
import com.discovery.dto.AddBookDTO;
import com.discovery.dto.AddBorrowDTO;
import com.discovery.dto.ApiResponse;
import com.discovery.dto.BookDetailsDTO;
import com.discovery.dto.BorrowDetailsDTO;
import com.discovery.dto.CountDTO;
import com.discovery.dto.UserDetailsDTO;
import com.discovery.entities.Author;
import com.discovery.entities.Book;
import com.discovery.entities.Borrow;
import com.discovery.entities.BorrowStatus;
import com.discovery.entities.Category;
import com.discovery.entities.Fine;
import com.discovery.entities.User;
import com.discovery.entities.UserDeleteStatus;
import com.discovery.entities.UserRole;

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
    private FineDao fineDao;
	
	@Autowired
	private ModelMapper mapper;
	
	

	
	
	public CountDTO getCountDetails() {
		Long borrowCount = borrowDao.countByBorrowed();
		Long userCount = userDao.count();
		Long bookCount = bookDao.count();
		Long fineCount = fineDao.count();
		
		List<User> uList = userDao.findAll();
		
		List<Book> bList = bookDao.findAll();
		
		List<UserDetailsDTO> users = new ArrayList<>();
		for(User u: uList) {
			if(u.getRole() == UserRole.ROLE_ADMIN) {
				
				}else {
			UserDetailsDTO uDto = new UserDetailsDTO(u.getFirstName()+" "+u.getLastName(), u.getId(),
					u.getEmail());
			
			users.add(uDto);}
		}
		
		
		List<BookDetailsDTO> books = new ArrayList<>();
		for(Book b: bList) {
			BookDetailsDTO bDto = new BookDetailsDTO(b.getId(), b.getTitle()
					, b.getQuantityAvailable(), b.getAuthorDetails());
			books.add(bDto);
		}
		
		
		return new CountDTO(bookCount, userCount, bookCount, fineCount, users, books);
		
	}
	
	
	public List<BorrowDetailsDTO> getBorrowList(){
		
		List<Borrow> newList = borrowDao.findAll();
		
		List<BorrowDetailsDTO> list = new ArrayList<>();
		for(Borrow b : newList) {
			BorrowDetailsDTO dto = new BorrowDetailsDTO(b.getId(),null, b.getBook().getTitle(),null, b.getUser().getFirstName(),
					b.getStatus(), b.getBorrowDate(), b.getReturnDate(),b.getDueDate());
			String name = b.getUser().getFirstName() + " " + b.getUser().getLastName(); 
			dto.setUserName(name);
			list.add(dto);
		}
		return list;
	}
	
	
	public BorrowDetailsDTO getBorrowDetailByUserIdAndBookId(Long userId) {

		User user = userDao.findById(userId)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!"));
					
		List<Borrow> borrowList = borrowDao.findByUser(user);
		
		if(borrowList.isEmpty())
			throw new ApiException("You have not borrowed any book yet");
		
		BorrowDetailsDTO dto = null;
		
		for(Borrow b: borrowList) {
			if(b.getStatus() == BorrowStatus.RETURNED) {}
			else {
				dto = new BorrowDetailsDTO(b.getId(),b.getBook().getId(), b.getBook().getTitle()
						,b.getUser().getId(), b.getUser().getFirstName()+" "+b.getUser().getLastName(),
						b.getStatus(), b.getBorrowDate(), b.getReturnDate(), b.getDueDate());
			}
		}
		
		if(dto == null)
			throw new ApiException("You have not borrowed any book yet");
					
		
					
		return dto;
	}
	
	public ApiResponse addNewBorrow(AddBorrowDTO dto) {

	    if (!dto.getBorrowDate().equals(LocalDate.now()))
	        throw new ApiException("Borrow date should be the current date");
	    else if (dto.getBorrowDate().isAfter(dto.getDueDate()))
	        throw new ApiException("Due date should be later than Borrow date");

	    // 1. Get book from its id
	    Book book = bookDao.findById(dto.getBookId())
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid book id !!!!"));

	    // 2. Get User from its id
	    User user = userDao.findById(dto.getUserId())
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!"));

	    // 2.2 Throw exception if the user has already borrowed a book
	    List<Borrow> borrowList = borrowDao.findByUser(user);

	    for (Borrow b : borrowList) {
	        if (b.getStatus() == BorrowStatus.BORROWED)
	            throw new ApiException("You are already in possession of a book");
	    }

	    // 2.3 Set book quantity
	    int quantity = book.getQuantityAvailable();

	    if (quantity > 0)
	        book.setQuantityAvailable(quantity - 1);
	    else
	        throw new ApiException("Book is not available to borrow");

	    // Debugging: Log the current quantity after the decrement
	    System.out.println("New quantity after borrowing: " + book.getQuantityAvailable());

	    // Save the updated book quantity
	    bookDao.save(book);

	    // Create and save the borrow record
	    Borrow borrow = new Borrow();
	    borrow.setBook(book);  // 3. Set the book for the borrow
	    borrow.setUser(user);  // 4. Set the user for the borrow
	    LocalDate borrowDate = dto.getBorrowDate() != null ? dto.getBorrowDate() : LocalDate.now();
	    borrow.setBorrowDate(borrowDate);
	    borrow.setDueDate(borrowDate.plusDays(BORROW_PERIOD_DAYS));
	    borrow.setStatus(dto.getStatus());  // Set the borrow status if provided
	    borrowDao.save(borrow);  // Save the borrow record

	    return new ApiResponse("Book '" + book.getTitle() + "' borrowed successfully", "success");
	}

	public ApiResponse returnBook(Long uId, Long bId) {
	    if (bId == null)
	        throw new ApiException("Cannot find any borrowed book");

	    // Retrieve the book and user
	    Book book = bookDao.findById(bId)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Book id !!!!"));
	    User user = userDao.findById(uId)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid User id !!!!"));

	    // Find the borrow records for the given user and book
	    List<Borrow> newList = borrowDao.findByUserAndBook(user, book);
	    
	    // Initialize the ApiResponse
	    ApiResponse api = new ApiResponse("Could not find any Record");

	    for (Borrow b : newList) {
	        if (b.getStatus() == BorrowStatus.BORROWED) {
	            // Mark the borrow record as returned and set the return date
	            b.setStatus(BorrowStatus.RETURNED);
	            b.setReturnDate(LocalDate.now());
	            
	            // Increment the book quantity and save it
	            book.setQuantityAvailable(book.getQuantityAvailable() + 1);
	            bookDao.save(book);
	            
	            // Set a successful response message with the book title
	            api = new ApiResponse(b.getBook().getTitle() + " Book returned successfully by " 
	                    + b.getUser().getFirstName() + " " + b.getUser().getLastName(), "success");
	        }    
	    }
	    
	    return api;
	}

	

	
	public ApiResponse returnBorrowedBook(Long borrowId) {
	    // 1. Retrieve the borrow record
	    Borrow borrow = borrowDao.findById(borrowId)
	            .orElseThrow(() -> new ResourceNotFoundException("Borrow record not found"));

	    // 2. Check if the book has already been returned
	    if (borrow.getReturnDate() != null) {
	        throw new ApiException("This book has already been returned");
	    }

	    // 3. Set the return date to now
	    borrow.setReturnDate(LocalDate.now());

	    // 4. Increment the book quantity and save it
	    Book book = borrow.getBook();
	    book.setQuantityAvailable(book.getQuantityAvailable() + 1);
	    bookDao.save(book);

	    // 5. Check if a fine should be applied
	    if (borrow.getDueDate() != null && borrow.getReturnDate().isAfter(borrow.getDueDate())) {
	        long daysLate = java.time.temporal.ChronoUnit.DAYS.between(borrow.getDueDate(), borrow.getReturnDate());
	        double fineAmount = daysLate * DAILY_FINE_RATE;
	        
	        Fine fine = new Fine();
	        fine.setBorrow(borrow);
	        fine.setFineAmount(fineAmount);
	        fine.setFineDate(LocalDate.now());
	        fine.setPaid(false);
	        fineDao.save(fine);
	    }

	    // 6. Update borrow status and save the borrow record
	    borrow.setStatus(BorrowStatus.RETURNED);
	    borrowDao.save(borrow);

	    return new ApiResponse("Book '" + book.getTitle() + "' returned successfully. Fine (if any) has been applied.", "success");
	}


}