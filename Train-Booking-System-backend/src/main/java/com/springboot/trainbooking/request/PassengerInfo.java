package com.springboot.trainbooking.request;

import java.time.LocalDate;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class PassengerInfo {

    @NotBlank
    @Size(min = 2, message = "First name must be at least 2 characters")
    private String fname;

    @NotBlank
    private String lname;

    @NotBlank
    private String source;

    @NotBlank
    private String destination;

    @NotNull
    private Integer trainNumber;

    @NotBlank
    private String trainName;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate journeyDate;
}
