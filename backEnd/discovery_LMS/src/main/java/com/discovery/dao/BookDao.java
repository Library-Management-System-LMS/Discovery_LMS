package com.discovery.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discovery.entities.Book;

public interface BookDao extends JpaRepository<Book,Long> {

}
