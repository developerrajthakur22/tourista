package com.Touristo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Touristo.Entity.Ticket;

public interface TicketRepo extends JpaRepository<Ticket, Integer>{

}
