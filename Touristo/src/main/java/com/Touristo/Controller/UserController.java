package com.Touristo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Touristo.Entity.Booking;
import com.Touristo.Entity.Bus;
import com.Touristo.Entity.Customer;
import com.Touristo.Entity.Hotel;
import com.Touristo.Entity.Packages;
import com.Touristo.Entity.Ticket;
import com.Touristo.Exception.NotFoundException;
import com.Touristo.Exception.TouristoException;
import com.Touristo.Service.UserServices;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	UserServices userServices;
	
	//User SignUp 
	@PostMapping(value = "/userSignUp")
	public ResponseEntity<Customer> customerSignUp(@RequestBody Customer customer) throws TouristoException{ 
		Customer cust = userServices.userSignup(customer);
		return new ResponseEntity<Customer>(cust, HttpStatus.ACCEPTED);
	}
	
	//User Login
	@GetMapping(value = "/userLogin")
	public ResponseEntity<Customer> customerLogin(String username, String password) throws NotFoundException, TouristoException{
		Customer cust = userServices.userLogin(username, password);
		return new ResponseEntity<Customer>(cust, HttpStatus.OK);
	}
	
	//View All Packages
	@GetMapping(value = "/Packages")
	public ResponseEntity<List<Packages>> viewAllPackages(){
		List<Packages> packages = userServices.viewAllPackages();
		return new ResponseEntity<List<Packages>>(packages, HttpStatus.OK);
 	}

	//View All Hotels
    @GetMapping(value = "/Hotels")
    public ResponseEntity<List<Hotel>> viewAllHotes(){
        List<Hotel> hotels = userServices.viewAllHotels();
        return new ResponseEntity<List<Hotel>>(hotels, HttpStatus.OK);
    }
    
    //View All Buses
    @GetMapping(value = "/Buses")
    public ResponseEntity<List<Bus>> viewAllBuses(){
    	List<Bus> buses = userServices.viewAllBus();
    	return new ResponseEntity<List<Bus>>(buses, HttpStatus.OK);
    }
	
    //View Your Tickets
    @GetMapping(value = "/YourTicket/{customerId}")  
    public ResponseEntity<List<Ticket>> viewYourTicket(@PathVariable int customerId){
    	List<Ticket> tickets = userServices.viewYourTickets(customerId);
    	return new ResponseEntity<List<Ticket>>(tickets, HttpStatus.OK);
    }

    //public List<Booking> viewYourBookings(int customerId);
    @GetMapping(value = "/YourBookings/{customerId}")
    public ResponseEntity<List<Booking>> viewYourBooking(@PathVariable int customerId){
    	List<Booking> bookings = userServices.viewYourBookings(customerId);
    	return new ResponseEntity<List<Booking>>(bookings, HttpStatus.OK);
    }
    
    //Hotel Booking
    @PostMapping(value = "/bookHotel/{customerId}/{hotelId}")
    public ResponseEntity<Booking> booking(@PathVariable int customerId, @PathVariable int hotelId){
    	Booking booked = userServices.bookHotel(customerId, hotelId);
    	return new ResponseEntity<Booking>(booked, HttpStatus.ACCEPTED);
    }
  
    //Package Booking    
    @PostMapping(value = "/bookPackage/{customerId}/{packageId}")
    public ResponseEntity<Booking> bookingPackage(@PathVariable int customerId, @PathVariable int packageId){
    	Booking booked = userServices.bookPackage(customerId, packageId);
    	return new ResponseEntity<Booking>(booked, HttpStatus.ACCEPTED);
    }
   
    //Bus Booking 
    @PostMapping(value = "/bookBus/{customerId}/{routeId}/{busId}")
    public ResponseEntity<Ticket> busBooking(@PathVariable int customerId, @PathVariable int routeId, @PathVariable int busId){
    	Ticket ticket = userServices.bookBus(customerId, routeId, busId);
    	return new ResponseEntity<Ticket>(ticket, HttpStatus.ACCEPTED);
    }
    
    
}
