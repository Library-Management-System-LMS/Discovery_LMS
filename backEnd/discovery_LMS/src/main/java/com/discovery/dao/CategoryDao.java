package com.discovery.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discovery.entities.Category;

public interface CategoryDao extends JpaRepository<Category,Long> {

}
