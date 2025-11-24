import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Train Booking System</h1>
      <p>
        Explore train ticket booking and more. Choose from the options below:
      </p>
      <div className="d-flex justify-content-center">
        <Link to="/book-ticket" className="btn btn-primary mx-2">
          Book a Ticket
        </Link>
        <Link to="/pnr-search" className="btn btn-secondary mx-2">
          PNR Search
        </Link>
        <Link to="/login" className="btn btn-info mx-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-success mx-2">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
