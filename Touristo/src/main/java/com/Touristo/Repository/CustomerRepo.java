package com.Touristo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Touristo.Entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer>{

	public Optional<Customer> findByEmail(String email);
	
}
