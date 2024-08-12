package com.discovery.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discovery.entities.Borrow;
import com.discovery.entities.Fine;

public interface FineDao extends JpaRepository<Fine, Long> {
    Fine findByBorrow(Borrow borrow);
}