import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BookTicketPage = () => {
  const [formData, setFormData] = useState({
    fname: "", // Changed from fullName to fname
    lname: "", // Added lname field
    trainNumber: "",
    trainName: "",
    source: "",
    destination: "",
    journeyDate: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the backend
    const ticketData = {
      fname: formData.fname,
      lname: formData.lname,
      source: formData.source,
      destination: formData.destination,
      trainNumber: formData.trainNumber,
      trainName: formData.trainName,
      journeyDate: formData.journeyDate, // Ensure it's in yyyy-MM-dd format
    };

    try {
      // Send POST request to the backend API
      const response = await axios.post(
        "http://localhost:8080/api/train/bookTicket",
        ticketData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        toast.success("Ticket booked successfully!");
      } else {
        toast.error("Failed to book ticket!");
      }
    } catch (error) {
      console.error("Error booking ticket:", error);
      if (error.response && error.response.data) {
        toast.error(`Error: ${error.response.data.message || "Failed to book ticket!"}`);
      } else {
        toast.error("Network error, please try again later.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Book Your Train Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="trainNumber"
            value={formData.trainNumber}
            onChange={handleInputChange}
            placeholder="Train Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="trainName"
            value={formData.trainName}
            onChange={handleInputChange}
            placeholder="Train Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="source"
            value={formData.source}
            onChange={handleInputChange}
            placeholder="Source"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Destination"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="journeyDate"
            value={formData.journeyDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Book Ticket
        </button>
      </form>
    </div>
  );
};

export default BookTicketPage;
