package com.Touristo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Touristo.Entity.Bus;
import com.Touristo.Entity.Hotel;
import com.Touristo.Entity.Packages;
import com.Touristo.Service.AdminServices;

@RestController
public class AdminController {

	 @Autowired
	 AdminServices adminServices;
	 
//	 //Get Methods
//	 public List<Packages> viewAllPackages();
//	 public List<Hotel> viewAllHotels();
//	 public List<Bus> viewAllBus();
//	 public List<Booking> viewAllBooking();
//		
//	 //Post Methods
//	 public Hotel addHotel(Hotel hotel);
//	 public Packages addPackages(Packages packages);
//	 public Bus addBus(Bus bus);
	 
	 @PostMapping(value = "/addHotel")
	 public ResponseEntity<Hotel> addHote(@RequestBody Hotel hotel) {
		 Hotel hot = adminServices.addHotel(hotel);
		 return new ResponseEntity<Hotel>(hot, HttpStatus.ACCEPTED);
	 }
	 
	 @PostMapping(value = "/addPackage")
	 public ResponseEntity<Packages> addPackage(@RequestBody Packages pack){
		 Packages pkg = adminServices.addPackages(pack);
		 return new ResponseEntity<Packages>(pkg, HttpStatus.ACCEPTED);
	 }
	    
	 @PostMapping(value = "/addBus")
	 public ResponseEntity<Bus> addBus(@RequestBody Bus bus){
		 Bus b = adminServices.addBus(bus);
		 return new ResponseEntity<Bus>(b, HttpStatus.ACCEPTED);
	 }
}
