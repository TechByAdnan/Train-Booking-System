package com.springboot.trainbooking.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "tickets")
@Data   // Lombok generates getters, setters, toString, equals, hashCode
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private Long pnr;

    private String fullName;
    private String source;
    private String destination;
    private Integer trainNumber;
    private String trainName;
    private LocalDate journeyDate;
    private Integer ticketPrice;
    private String ticketStatus;
}
