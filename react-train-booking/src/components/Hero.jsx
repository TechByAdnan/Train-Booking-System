import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="hero py-5"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #fff8e1)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container text-center">
        {/* MAIN HEADING */}
        <h1
          className="display-4 fw-bold"
          style={{
            color: "#0d47a1",
            textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Explore the Best{" "}
          <span style={{ color: "#d50000" }}>Train</span> Journeys
        </h1>

        <p
          className="lead mt-2"
          style={{
            color: "#37474f",
            fontSize: "1.2rem",
            fontWeight: "500",
          }}
        >
          Choose your next adventure with ease!
        </p>

        <div className="row mt-5">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div
              className="card shadow hero-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1210713148/photo/chhatrapati-shivaji-terminus-railway-station-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=j_DJZBQ3cSYzeYq627dPlqL777isvNRdxtN3d_LrhyM="
                className="card-img-top hero-img"
                alt="Train 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">Express Journey</h5>
                <p className="card-text text-muted">
                  Book tickets for fast and comfortable journeys.
                </p>
                <Link
                  to="/book-ticket"
                  className="btn"
                  style={{
                    background: "#1e88e5",
                    color: "white",
                    borderRadius: "25px",
                    padding: "8px 20px",
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div
              className="card shadow hero-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1221311412/photo/railroad-track-and-switch.webp?a=1&b=1&s=612x612&w=0&k=20&c=9YWOhIGgIFRfb25rEsh4YkHTDkRfqrqAZDFypBLR3Ac="
                className="card-img-top hero-img"
                alt="Train 2"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-success">Scenic Routes</h5>
                <p className="card-text text-muted">
                  Experience beautiful landscapes during your travel.
                </p>
                <Link
                  to="/book-ticket"
                  className="btn"
                  style={{
                    background: "#43a047",
                    color: "white",
                    borderRadius: "25px",
                    padding: "8px 20px",
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div
              className="card shadow hero-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1709338573277-c161cbf8702c?w=500&auto=format&fit=crop&q=60"
                className="card-img-top hero-img"
                alt="Train 3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-danger">Luxury Travel</h5>
                <p className="card-text text-muted">
                  Travel in comfort with premium facilities and services.
                </p>
                <Link
                  to="/book-ticket"
                  className="btn"
                  style={{
                    background: "#d32f2f",
                    color: "white",
                    borderRadius: "25px",
                    padding: "8px 20px",
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD HOVER STYLE */}
      <style>
        {`
          .hero-card:hover {
            transform: translateY(-8px);
            box-shadow: 0px 15px 35px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
