package com.springboot.trainbooking.service;

import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import com.springboot.trainbooking.entity.Ticket;
import com.springboot.trainbooking.repository.TicketRepository;
import com.springboot.trainbooking.request.PassengerInfo;
import com.springboot.trainbooking.response.TicketInfo;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final AtomicLong pnrGenerator = new AtomicLong(System.currentTimeMillis());
    private final Random random = new Random();

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public TicketInfo generateTicket(PassengerInfo p) {

        Ticket ticket = new Ticket();

        ticket.setFullName(p.getFname() + " " + p.getLname());
        ticket.setSource(p.getSource());
        ticket.setDestination(p.getDestination());
        ticket.setTrainNumber(p.getTrainNumber());
        ticket.setTrainName(p.getTrainName());
        ticket.setJourneyDate(p.getJourneyDate());

        ticket.setTicketPrice(100 + random.nextInt(500));
        ticket.setTicketStatus(generateStatus());

        // Generate PNR
        ticket.setPnr(pnrGenerator.incrementAndGet());

        // Save to DB
        Ticket saved = ticketRepository.save(ticket);

        // Convert to response DTO
        TicketInfo info = new TicketInfo();
        info.setPnr(saved.getPnr());
        info.setFullName(saved.getFullName());
        info.setSource(saved.getSource());
        info.setDestination(saved.getDestination());
        info.setTrainNumber(saved.getTrainNumber());
        info.setTrainName(saved.getTrainName());
        info.setJourneyDate(saved.getJourneyDate());
        info.setTicketPrice(saved.getTicketPrice());
        info.setTicketStatus(saved.getTicketStatus());

        return info;
    }
    
    public boolean cancelTicket(Long pnr) {
        return ticketRepository.findByPnr(pnr)
                .map(t -> {
                    ticketRepository.delete(t);
                    return true;
                })
                .orElse(false);
    }
    
    public List<Ticket> getAll() {
        return ticketRepository.findAll();
    }



    private String generateStatus() {
        int value = random.nextInt(100);
        if (value < 60) return "CONFIRMED";
        if (value < 85) return "RAC";
        return "WAITLIST";
    }

    public TicketInfo getTicket(Long pnr) {
        return ticketRepository.findByPnr(pnr)
                .map(t -> {
                    TicketInfo info = new TicketInfo();
                    info.setPnr(t.getPnr());
                    info.setFullName(t.getFullName());
                    info.setSource(t.getSource());
                    info.setDestination(t.getDestination());
                    info.setTrainNumber(t.getTrainNumber());
                    info.setTrainName(t.getTrainName());
                    info.setJourneyDate(t.getJourneyDate());
                    info.setTicketPrice(t.getTicketPrice());
                    info.setTicketStatus(t.getTicketStatus());
                    return info;
                })
                .orElse(null);
    }
}
