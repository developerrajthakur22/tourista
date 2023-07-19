package com.Tourista.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Customer {
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int CustomerId;
	private String CustomerName;
	private String customerPassword;
	private String address;
	private String mobileNo;
	private String email;
	
	@OneToOne
	private User user;
	
	@OneToMany(mappedBy = "customer")
	private List<Booking> bookingLIst;

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
