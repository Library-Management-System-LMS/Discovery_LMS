package com.discovery.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.discovery.dto.ApiResponse;
import com.discovery.dto.SignInRequest;
import com.discovery.dto.SignUp;
import com.discovery.dto.UpdateUser;
import com.discovery.service.UserServiceImpl;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
	
	@Autowired //byType
	private UserServiceImpl userService;
	
	@PostMapping("/signin") //@RequestMapping(method=POST)
	@Operation(description = "Sign in User")
	public ResponseEntity<?> signInUser(
			@RequestBody @Valid SignInRequest request) {
		
		//@RequestBody => Json -> Java (un marshalling | de ser)
		System.out.println("in signin " + request);
		
//		System.out.println("service "+userService);
			
		try {
			return ResponseEntity.ok(
					userService.authenticateUser(request));
		} catch (RuntimeException e) {
				
			System.out.println(e);
				
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
						.body(new ApiResponse(e.getMessage()));
						
		}
		
		
	}
	
	
	@PostMapping("/signup")
	@Operation(description = "Sign Up User")
	public ResponseEntity<?> signUpUser
	(@RequestBody @Valid SignUp dto) {
		
		System.out.println("in add post "+dto);
		
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.signUpUser(dto));
		} catch (RuntimeException e) {
			
			System.out.println(e);
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
					
		}
	}
	
	
	//Add try catch block
	@PutMapping
	@Operation(description = "Update user details")
	public ResponseEntity<?> updateUser(@RequestBody @Valid UpdateUser dto) {
		System.out.println("in update user " + dto);
		
		try {
			return ResponseEntity.ok(userService.updateUser(dto));
		} catch (RuntimeException e) {
				
			System.out.println(e);
				
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
						.body(new ApiResponse(e.getMessage()));
						
		}
	}
	
	@DeleteMapping("/{userId}")
	@Operation(description = "Delete user details")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
		System.out.println("in delete " + userId);
		
		try {
			return ResponseEntity.ok(userService.deleteUser(userId));
			} catch (RuntimeException e) {
				
				System.out.println(e);
				
				return ResponseEntity.status(HttpStatus.BAD_REQUEST)
						.body(new ApiResponse(e.getMessage()));
						
			}
	}

}
