package com.Tourista.Entity;

import java.time.LocalDate;

import com.Tourista.enumtype.EnumBookingType;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Booking {
	private int bookingId;
	private EnumBookingType booingType;
	private String bookingDecription;
	private String bookingTitle;
	private LocalDate date;
	
	@ManyToOne()
	private Customer customer;
	
	@OneToMany()
	private Package ppackage;
	
	
 	
	

}
