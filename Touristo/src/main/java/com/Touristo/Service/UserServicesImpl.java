package com.Touristo.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Touristo.Entity.Booking;
import com.Touristo.Entity.Bus;
import com.Touristo.Entity.Customer;
import com.Touristo.Entity.Hotel;
import com.Touristo.Entity.Packages;
import com.Touristo.Entity.Route;
import com.Touristo.Entity.Ticket;
import com.Touristo.Exception.NotFoundException;
import com.Touristo.Exception.TouristoException;
import com.Touristo.Repository.BookingRepo;
import com.Touristo.Repository.BusRepo;
import com.Touristo.Repository.CustomerRepo;
import com.Touristo.Repository.FeedbackRepo;
import com.Touristo.Repository.HotelRepo;
import com.Touristo.Repository.PackageRepo;
import com.Touristo.Repository.RouteRepo;
import com.Touristo.Repository.TicketRepo;

@Service
public class UserServicesImpl implements UserServices{

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
	public Customer userSignup(Customer customer) throws TouristoException {
		// TODO Auto-generated method stub
		Optional<Customer> opt = customerRepo.findByEmail(customer.getEmail());
		if(opt.isPresent()) {
			throw new TouristoException("User already registered");
		}
		customerRepo.save(customer);
		return customer;
	}

	@Override
	public Customer userLogin(String email, String password) throws NotFoundException, TouristoException {
		// TODO Auto-generated method stub
		Optional<Customer> opt = customerRepo.findByEmail(email);
		if(!opt.isPresent()) {
			throw new NotFoundException("User not found");
		}
		Customer customer = opt.get();
		if(customer.getPassword().equals(password)) {
			return customer;
		}else {
			throw new TouristoException("Invalid Credentials");	
		}
	}

	
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
	public List<Ticket> viewYourTickets(int customerId) {
		// TODO Auto-generated method stub
		Optional<Customer> opt = customerRepo.findById(customerId);
		
		Customer customer = opt.get();
		List<Ticket> tickets = customer.getTickets();
		return tickets;
	}

	@Override
	public List<Booking> viewYourBookings(int customerId) {
		// TODO Auto-generated method stub
		Optional<Customer> opt = customerRepo.findById(customerId);
		
		Customer customer = opt.get();
		List<Booking> bookings = customer.getBookings();
		return bookings;
	}

	@Override
	public Booking bookHotel(int customerId, int HotelId) {
		// TODO Auto-generated method stub
		Optional<Customer> optCustomer = customerRepo.findById(customerId);
		Customer customer = optCustomer.get();
		Optional<Hotel> optHotel = hotelRepo.findById(HotelId);
		Hotel hotel = optHotel.get();
		
		Booking booking = new Booking();
		booking.setBookingDate(LocalDate.now());
		booking.setBookingTitle("Hotel Booking");
		booking.setDescription(hotel.getHotelname() + " is booked for you, your hotel address is " + hotel.getHotelAddress());
			    
		booking.setCustomer(customer);
		
		List<Hotel> hotels = booking.getHotels();
		hotels.add(hotel);
		booking.setHotels(hotels);
		hotel.setBooking(booking);

		List<Booking> bookings = customer.getBookings();
		bookings.add(booking);
		customer.setBookings(bookings);
		
		customerRepo.save(customer);
		
		return booking;
	}

	@Override
	public Booking bookPackage(int customerId, int PackageId) {
		// TODO Auto-generated method stub
		Optional<Customer> optCustomer = customerRepo.findById(customerId);
		Customer customer = optCustomer.get();
		Optional<Packages> optPackage = packageRepo.findById(PackageId);
		Packages pack = optPackage.get();
		
		Booking booking = new Booking();
		booking.setBookingDate(LocalDate.now());
		booking.setBookingTitle("Package Booking");
		booking.setDescription(pack.getPackageName() + " is booked for you," + pack.getPackageDescription());
		
		booking.setCustomer(customer);
		
		List<Packages> packages = booking.getPackages();
		packages.add(pack);
		booking.setPackages(packages);
		pack.setBooking(booking);
		
		List<Booking> bookings = customer.getBookings();
		bookings.add(booking);
		customer.setBookings(bookings);
		 
		customerRepo.save(customer);
		
		return booking;
	}

	@Override
	public Ticket bookBus(int customerId, int routeId, int busId) {
		// TODO Auto-generated method stub
		
		Optional<Customer> optCustomer = customerRepo.findById(customerId);
		Optional<Bus> optBus = busRepo.findById(busId);
		
		Optional<Route> optRoute = routeRepo.findById(routeId);
		
		Customer customer = optCustomer.get();
		Bus bus = optBus.get();
		Route route = optRoute.get();
		
		route.setBus(bus);
		List<Ticket> ticket = customer.getTickets();
		Ticket ticketObj = new Ticket();
		ticketObj.setRoute(route);
		ticketObj.setCustomer(customer);
		ticketObj.setStatus("Booked");
		
		ticket.add(ticketObj);
		customer.setTickets(ticket);
		
		return ticketObj;
	}

	
}
