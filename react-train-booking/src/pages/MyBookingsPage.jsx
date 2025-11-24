import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/train/tickets");
      setBookings(response.data);
    } catch (error) {
      toast.error("Failed to fetch bookings!");
      console.error("Error fetching bookings:", error);
    }
  };

  const handleCancelBooking = async (pnr) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/train/cancel/${pnr}`);
      if (response.status === 200) {
        toast.success("Ticket cancelled successfully!");
        fetchBookings(); 
      } else {
        toast.error("Failed to cancel ticket!");
      }
    } catch (error) {
      toast.error("Failed to cancel ticket!");
      console.error("Error cancelling ticket:", error);
    }
  };

  // 🔥 STYLE HANDLER FOR STATUS
  const getStatusStyle = (status) => {
    if (!status) return "badge bg-secondary";

    const s = status.toUpperCase();

    if (s === "CONFIRMED") return "badge bg-success";        // green
    if (s === "WAITLIST" || s === "WL") return "badge bg-danger"; // red
    if (s === "RAC") return "badge bg-warning text-dark";   // orange

    return "badge bg-secondary";
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">My Bookings</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>PNR</th>
            <th>Full Name</th>
            <th>Train Number</th>
            <th>Train Name</th>
            <th>Journey Date</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Ticket Price</th>
            <th>Ticket Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="10" className="text-center text-muted">
                No bookings found.
              </td>
            </tr>
          ) : (
            bookings.map((ticket) => (
              <tr key={ticket.pnr}>
                <td>{ticket.pnr}</td>
                <td>{ticket.fullName}</td>
                <td>{ticket.trainNumber}</td>
                <td>{ticket.trainName}</td>
                <td>{ticket.journeyDate}</td>
                <td>{ticket.source}</td>
                <td>{ticket.destination}</td>
                <td>{ticket.ticketPrice}</td>

                {/* 🔥 STATUS WITH COLORS */}
                <td>
                  <span
                    className={getStatusStyle(ticket.ticketStatus)}
                    style={{ fontSize: "14px", padding: "6px 12px" }}
                  >
                    {ticket.ticketStatus}
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleCancelBooking(ticket.pnr)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingsPage;
