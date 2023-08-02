package com.Touristo.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Touristo.Entity.Booking;
import com.Touristo.Entity.Bus;
import com.Touristo.Entity.Customer;
import com.Touristo.Entity.Feedback;
import com.Touristo.Entity.Hotel;
import com.Touristo.Entity.Packages;
import com.Touristo.Entity.Route;
import com.Touristo.Entity.Ticket;
import com.Touristo.Exception.NotFoundException;
import com.Touristo.Exception.TouristoException;

@Service
public interface UserServices {

	public Customer userSignup(Customer customer) throws TouristoException ;
	
	public Customer userLogin(String email, String password) throws NotFoundException, TouristoException;
	
	public List<Packages> viewAllPackages();
	
	public List<Hotel> viewAllHotels();
	
	public List<Bus> viewAllBus();
	
	public List<Ticket> viewYourTickets(int customerId);
	
    public List<Booking> viewYourBookings(int customerId);
    
    public Booking bookHotel(int customerId, int HotelId);
    
    public Booking bookPackage(int customerId, int PackageId);
    
    public Ticket bookBus(int customerId, int routeId, int BusId);
    
    public Feedback addFeedback(int customerId, Feedback feedback);
    
    public void cancelHotelBooking(int BookingId);
    
    public void cancelPackageBooking(int BookingId);
    
    public void cancelTicket(int ticketId);
    
    public Route route(Route route);
    
    public List<Hotel> searchFunction(String name) throws NotFoundException;
    
    public List<Bus> searchBus(String name) throws NotFoundException;
}
