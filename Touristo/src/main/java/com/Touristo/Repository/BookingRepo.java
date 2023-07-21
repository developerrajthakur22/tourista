package com.Touristo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Touristo.Entity.Booking;

public interface BookingRepo extends JpaRepository<Booking, Integer>{

}
