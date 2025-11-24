package com.springboot.trainbooking.response;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

@Data
@JsonPropertyOrder({
	"pnr",
	"fullName",
    "trainNumber",
    "trainName",
    "source",
    "destination",
    "journeyDate",
    "ticketPrice",
    "ticketStatus"
    
})
public class TicketInfo {

    private Long pnr;
    private String fullName;
    private String source;
    private String destination;
    private Integer trainNumber;
    private String trainName;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate journeyDate;

    private Integer ticketPrice;
    private String ticketStatus;
}
