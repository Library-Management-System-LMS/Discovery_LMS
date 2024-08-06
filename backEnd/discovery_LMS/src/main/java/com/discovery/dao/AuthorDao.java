package com.discovery.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discovery.entities.Author;

public interface AuthorDao extends JpaRepository<Author,Long> {

}
