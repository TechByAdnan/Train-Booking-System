package com.springboot.trainbooking.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.trainbooking.request.PassengerInfo;
import com.springboot.trainbooking.response.TicketInfo;
import com.springboot.trainbooking.service.TicketService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/train")
public class RailwayController {

	private final TicketService ticketService;

    public RailwayController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @CrossOrigin(origins = "http://localhost:5175")  // Allow CORS only for this method
    @GetMapping("/ticket/{pnr}")
    public ResponseEntity<TicketInfo> getTicket(@PathVariable Long pnr) {
        TicketInfo ticket = ticketService.getTicket(pnr);
        if (ticket == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(ticket);
    }
    
    @GetMapping("/tickets")
    public ResponseEntity<?> getAllTickets() {
        return ResponseEntity.ok(ticketService.getAll());
    }



    @PostMapping("/bookTicket")
    public ResponseEntity<TicketInfo> bookTicket(@Valid @RequestBody PassengerInfo pinfo) {
        TicketInfo ticket = ticketService.generateTicket(pinfo);
        return new ResponseEntity<>(ticket, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/cancel/{pnr}")
    public ResponseEntity<?> cancel(@PathVariable Long pnr) {
        boolean result = ticketService.cancelTicket(pnr);
        if (result) return ResponseEntity.ok("Ticket cancelled");
        return ResponseEntity.notFound().build();
    }
}
