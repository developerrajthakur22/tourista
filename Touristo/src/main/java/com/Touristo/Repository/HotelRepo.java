package com.Touristo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Touristo.Entity.Hotel;

public interface HotelRepo extends JpaRepository<Hotel, Integer>{

}
