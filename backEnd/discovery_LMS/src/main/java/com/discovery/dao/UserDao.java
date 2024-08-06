package com.discovery.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discovery.entities.User;

public interface UserDao  extends JpaRepository<User,Long> {

}
