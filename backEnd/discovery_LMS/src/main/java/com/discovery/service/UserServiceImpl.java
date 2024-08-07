package com.discovery.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;

import com.discovery.custom_exceptions.ApiException;
import com.discovery.custom_exceptions.AuthenticationException;
import com.discovery.dao.UserDao;
import com.discovery.dto.ApiResponse;
import com.discovery.dto.SignInRequest;
import com.discovery.dto.SignUp;
import com.discovery.dto.UserDetailsDTO;
import com.discovery.entities.User;
import com.discovery.entities.UserRole;

@Service
@Transactional
public class UserServiceImpl {
	// depcy
	@Autowired
	private UserDao userDao;
		
	@Autowired
	private ModelMapper mapper;

	public UserDetailsDTO authenticateUser(SignInRequest dto) {
		// 1.invoke dao 's method
		User user = userDao.findByEmailAndPassword(
					dto.getEmail(), dto.getPassword())
					.orElseThrow(() -> 
					new AuthenticationException("Invalid Email or Password !!!!!!"));
		//valid login -user : persistent -> entity -> dto
			return mapper.map(user, UserDetailsDTO.class);
	}
	
	public ApiResponse SignUpUser(SignUp dto) {
		
		if(userDao.existsByEmail(dto.getEmail()))
			throw new ApiException("Email Already Exist !!!");
		
		
		User user = mapper.map(dto, User.class);
		
		user.setRole(UserRole.ROLE_USER);
//		user.setRole(UserRole.ROLE_ADMIN);
		
		User persistentUser = userDao.save(user);
		
		return new ApiResponse("New User added with ID=" + persistentUser.getId());
	}
	
	
	
}
