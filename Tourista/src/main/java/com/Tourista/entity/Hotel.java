package com.Tourista.entity;

import com.Tourista.enumtype.EnumHotelType;

import jakarta.persistence.Entity;

@Entity
public class Hotel {
	private int hotelId;
	private String hotelName;
	private EnumHotelType hotelType;
	private String hotelDescription;
	private String hotelAddress;
	private Double hotelRent;
	private String hotelStatus;
	
}
