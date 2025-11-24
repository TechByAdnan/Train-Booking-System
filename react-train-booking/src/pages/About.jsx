import React from "react";

const About = () => {
  return (
    <section
      className="about py-5"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #fff7e6)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container text-center">

        {/* Header */}
        <h2
          className="fw-bold mb-3"
          style={{
            color: "#0d47a1",
            fontSize: "2.2rem",
            textShadow: "1px 1px 6px rgba(0,0,0,0.15)",
          }}
        >
          About Us
        </h2>

        <p
          className="lead mb-5"
          style={{
            fontSize: "1.2rem",
            color: "#37474f",
            fontWeight: 500,
          }}
        >
          We are committed to providing the best <span style={{ color: "#d32f2f" }}>train</span> booking experience.
        </p>

        <div className="row text-start">

          {/* Mission */}
          <div className="col-md-6 mb-4">
            <div
              className="p-4 shadow-sm rounded"
              style={{ background: "white", borderLeft: "5px solid #1565c0" }}
            >
              <h4 className="fw-bold" style={{ color: "#1565c0" }}>Our Mission</h4>
              <p style={{ color: "#444" }}>
                Our mission is to simplify train ticket booking with a seamless,
                reliable, and user-friendly system designed for every traveler.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6 mb-4">
            <div
              className="p-4 shadow-sm rounded"
              style={{ background: "white", borderLeft: "5px solid #d81b60" }}
            >
              <h4 className="fw-bold" style={{ color: "#d81b60" }}>Our Vision</h4>
              <p style={{ color: "#444" }}>
                To become India’s most trusted and innovative platform for train travel,
                delivering smooth booking experiences and exceptional support.
              </p>
            </div>
          </div>
        </div>

        {/* RAILHOLICS SECTION */}
        <div
          className="mt-5 p-5 shadow rounded"
          style={{
            background: "white",
            borderRadius: "18px",
            border: "2px solid rgba(0,0,0,0.07)",
          }}
        >
          <h3
            className="fw-bold"
            style={{
              color: "#c62828",
              fontSize: "2rem",
              textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            🚆 About Railholics – India’s Biggest Railfan Community
          </h3>

          <p
            className="mt-3"
            style={{
              color: "#424242",
              fontSize: "1.1rem",
              lineHeight: "1.7",
            }}
          >
            <strong>Railholics</strong> is one of India’s largest and fastest-growing
            <strong> railfan communities</strong>, dedicated to celebrating the beauty,
            engineering, and legacy of Indian Railways.
            <br /><br />
            With thousands of passionate rail enthusiasts, Railholics brings together
            people who love:
          </p>

          <ul
            style={{
              textAlign: "left",
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
              color: "#333",
            }}
          >
            <li>Train spotting and high-quality railway photography</li>
            <li>Sharing knowledge about locomotives, routes & signaling</li>
            <li>Capturing rare train moments and railway heritage</li>
            <li>Discussing railway technology, timetables, and operations</li>
            <li>Promoting safe and informed railfanning in India</li>
          </ul>

          <p
            className="mt-4"
            style={{
              color: "#424242",
              fontSize: "1.1rem",
              lineHeight: "1.7",
            }}
          >
            Railholics is more than a community—it's a family of railway lovers,
            connected by passion, nostalgia, and the sound of engines roaring through
            the tracks. From daily reel uploads to informative posts,
            <strong> Railholics inspires millions</strong> and keeps the spirit of
            Indian Railways alive.
          </p>

          <a
            href="https://www.youtube.com/@railholics"
            className="btn btn-danger px-4 mt-4"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              borderRadius: "25px",
              fontWeight: "600",
              fontSize: "1.1rem",
            }}
          >
            Visit Railholics YouTube Channel →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
