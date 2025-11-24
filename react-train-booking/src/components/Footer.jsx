import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white mt-5"
      style={{
        background: "linear-gradient(135deg, #0d47a1, #1976d2)",
        padding: "40px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      <div className="container text-center">

        {/* TITLE */}
        <h5 className="fw-bold mb-3" style={{ letterSpacing: "1px" }}>
          Train Booking System
        </h5>

        {/* COPYRIGHT */}
        <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
          © 2025 Train Booking System. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="d-flex justify-content-center mt-3">

          <a
            href="https://www.facebook.com/iadnaann"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook size={26} />
          </a>

          <a
            href="https://www.youtube.com/@railholics"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaYoutube size={26} />
          </a>

          <a
            href="https://www.instagram.com/iadnaann"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/mo-adnan-633a932a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={26} />
          </a>

          <a
            href="https://github.com/TechByAdnan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={26} />
          </a>
        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
          .social-icon {
            color: white;
            margin: 0 12px;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
          }

          .social-icon:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,0.25);
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
          }

          footer p {
            margin: 0;
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;
