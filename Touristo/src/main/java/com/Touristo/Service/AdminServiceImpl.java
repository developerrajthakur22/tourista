package com.Touristo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Touristo.Entity.Booking;
import com.Touristo.Entity.Bus;
import com.Touristo.Entity.Hotel;
import com.Touristo.Entity.Packages;
import com.Touristo.Repository.BookingRepo;
import com.Touristo.Repository.BusRepo;
import com.Touristo.Repository.CustomerRepo;
import com.Touristo.Repository.FeedbackRepo;
import com.Touristo.Repository.HotelRepo;
import com.Touristo.Repository.PackageRepo;
import com.Touristo.Repository.RouteRepo;
import com.Touristo.Repository.TicketRepo;

@Service
public class AdminServiceImpl implements AdminServices {

	@Autowired
	BookingRepo bookingRepo;
	
	@Autowired
	BusRepo busRepo;
	
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	FeedbackRepo feedbackRepo;
	
	@Autowired
	HotelRepo hotelRepo;
	
	@Autowired
	PackageRepo packageRepo;
	
	@Autowired
	RouteRepo routeRepo;
	
	@Autowired 
	TicketRepo ticketRepo;
	
	@Override
	public List<Packages> viewAllPackages() {
		// TODO Auto-generated method stub
		List<Packages> packages = packageRepo.findAll();
		return packages;
	}

	@Override
	public List<Hotel> viewAllHotels() {
		// TODO Auto-generated method stub
		List<Hotel> hotels = hotelRepo.findAll();
		return hotels;
	}
	
	@Override
	public List<Bus> viewAllBus() {
		// TODO Auto-generated method stub
		List<Bus> buses = busRepo.findAll();
		return buses;
	}

	@Override
	public List<Booking> viewAllBooking() {
		// TODO Auto-generated method stub
		List<Booking> booking = bookingRepo.findAll();
		return booking;
	}

	@Override
	public Hotel addHotel(Hotel hotel) {
		// TODO Auto-generated method stub
		Hotel hot = hotelRepo.save(hotel);
		return hot;
	}

	@Override
	public Packages addPackages(Packages packages) {
		// TODO Auto-generated method stub
		Packages pack = packageRepo.save(packages);
		return pack;
	}

	@Override
	public Bus addBus(Bus bus) {
		// TODO Auto-generated method stub
		Bus addedbus = busRepo.save(bus);
		return addedbus; 
	}

}
