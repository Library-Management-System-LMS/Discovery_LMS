package com.discovery.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.discovery.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SignUp {
	
//	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
//	private Long id;
	@NotBlank(message = "First Name required")
	private String firstName;
	
	@NotBlank(message = "Last Name required")
	private String lastName;
	
	@Email(message = "Invalid Email!!!")
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	private UserRole role;
	public SignUp(String firstName, String lastName,
			String email, String password, UserRole role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	
	
}
