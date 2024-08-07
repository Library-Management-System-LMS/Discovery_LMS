package com.discovery.dto;

import com.discovery.entities.UserRole;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDetailsDTO {

	private String firstName;
	

	private String lastName;
	

	private String email;
	
	
	private UserRole role;
}
