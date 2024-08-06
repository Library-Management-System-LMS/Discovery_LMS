package com.discovery.entities;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "password",callSuper = true) // toString excluding password
public class User extends BaseEntity{
	@Column(length = 20)
	private String firstName;
	
	@Column(length = 20)
	private String lastName;
	
	@Column(length = 30, unique = true)
	private String email;
	
	@Column(length = 300, nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private UserRole role;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 5)
	private UserDeleteStatus isDeleted;
	

}
