package com.Touristo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Touristo.Entity.Bus;

public interface BusRepo extends JpaRepository<Bus, Integer>{

	@Query("SELECT b FROM Bus b WHERE b.travelAgency LIKE %:name%")
    List<Bus> findBusesByNameContaining(String name);
	
}
