package com.springboot.trainbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.trainbooking.entity.Ticket;
import java.util.Optional;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    Optional<Ticket> findByPnr(Long pnr);
}
