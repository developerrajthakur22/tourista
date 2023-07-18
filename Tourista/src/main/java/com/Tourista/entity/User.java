package com.Tourista.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToOne;

@Entity
public class User {
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int userId;
	@Column(nullable =  true )
	private String userType;
	@Column(nullable =  true )
	private String password;
	
	@OneToOne(mappedBy = "user")
	private Customer customer;

	
}
