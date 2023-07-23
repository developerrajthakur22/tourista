package com.Touristo.Service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.Touristo.Entity.Booking;
import com.Touristo.Entity.Bus;
import com.Touristo.Entity.Hotel;
import com.Touristo.Entity.Packages;

@Service
public interface AdminServices {
	
	//Get Methods
	public List<Packages> viewAllPackages();
	public List<Hotel> viewAllHotels();
	public List<Bus> viewAllBus();
//	public List<Booking> viewAllBooking();
	
	//Post Methods
	public Hotel addHotel(Hotel hotel);
	public Packages addPackages(Packages packages);
	public Bus addBus(Bus bus);
	
	public List<Map<String,String>> viewAllBookings();
}
