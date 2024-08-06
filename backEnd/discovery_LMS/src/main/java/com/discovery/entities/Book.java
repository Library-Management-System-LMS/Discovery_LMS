package com.discovery.entities;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Entity
//@Table(name = "users")
//@NoArgsConstructor
//@AllArgsConstructor
//@Getter
//@Setter
//@ToString(exclude = "password",callSuper = true) // toString excluding password
public class Book extends BaseEntity{
	
//    title
//    author
//    category
//    publication_date
//    ISBN
//    quantity_available
//    description
	
	private String title;
	
}
