package com.Touristo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Touristo.Entity.Hotel;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, Integer>{

	@Query("SELECT h FROM Hotel h WHERE h.hotelname LIKE %:hotelName%")
    List<Hotel> findHotelsByNameContaining(String hotelName);

	
}
