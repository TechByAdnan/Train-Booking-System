import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // load saved preference or follow system preference initially
    const saved = localStorage.getItem("app-theme");
    if (saved) {
      setDark(saved === "dark");
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }

    // add top padding to body so fixed navbar doesn't overlap content
    const addBodyPadding = () => {
      const nav = document.getElementById("app-navbar");
      if (nav) {
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
      }
    };
    addBodyPadding();
    window.addEventListener("resize", addBodyPadding);
    return () => window.removeEventListener("resize", addBodyPadding);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  };

  // small helper to highlight current route
  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  return (
    <>
      <nav
        id="app-navbar"
        className="navbar navbar-expand-lg fixed-top"
        style={{
          transition: "background-color 0.25s ease, box-shadow 0.25s ease",
          zIndex: 1030,
          backdropFilter: "saturate(140%) blur(6px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fw-bold d-flex align-items-center"
            to="/"
            style={{ gap: "8px", color: "var(--brand-on-bg)" }}
          >
            <span style={{ fontSize: "1.2rem" }}>🚆</span>
            <span style={{ letterSpacing: "0.6px" }}>Train Booking</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "6px",
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center" style={{ gap: "6px" }}>
              <li className={`nav-item mx-1`}>
                <Link className={`nav-link nav-hover ${isActive("/book-ticket")}`} to="/book-ticket">
                  Book Ticket
                </Link>
              </li>

              <li className={`nav-item mx-1`}>
                <Link className={`nav-link nav-hover ${isActive("/pnr-search")}`} to="/pnr-search">
                  PNR Search
                </Link>
              </li>

              <li className={`nav-item mx-1`}>
                <Link className={`nav-link nav-hover ${isActive("/my-bookings")}`} to="/my-bookings">
                  My Bookings
                </Link>
              </li>

              <li className="nav-item mx-1">
                <Link to="/login" className="btn btn-sm btn-outline" style={{ borderRadius: 18, padding: "6px 14px" }}>
                  Login
                </Link>
              </li>

              <li className="nav-item mx-1">
                <Link to="/signup" className="btn btn-sm btn-cta" style={{ borderRadius: 18, padding: "6px 14px" }}>
                  Sign Up
                </Link>
              </li>

              {/* Theme toggle */}
              <li className="nav-item mx-1 d-flex align-items-center">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="btn btn-sm btn-theme-toggle"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 18,
                    padding: "6px 10px",
                  }}
                >
                  {dark ? "🌙 Dark" : "☀️ Light"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* scoped styles */}
        <style>{`
          /* CSS variables for light/dark managed by [data-theme] on html */
          :root {
            --brand-bg: linear-gradient(90deg,#0d47a1,#1976d2);
            --brand-on-bg: #ffffff;
            --nav-bg: rgba(13,71,161,0.95);
            --muted: rgba(255,255,255,0.9);
            --cta-bg: #ffeb3b;
            --cta-color: #111827;
            --outline: rgba(255,255,255,0.12);
          }

          [data-theme="light"] {
            --brand-bg: linear-gradient(90deg,#0d47a1,#1976d2);
            --brand-on-bg: #ffffff;
            --nav-bg: rgba(13,71,161,0.92);
            --muted: rgba(255,255,255,0.95);
            --cta-bg: #ffeb3b;
            --cta-color: #111827;
            --outline: rgba(255,255,255,0.12);
            --link-color: rgba(255,255,255,0.95);
            --link-hover: #ffffff;
          }

          [data-theme="dark"] {
            --brand-bg: linear-gradient(90deg,#001f3f,#0b3a66);
            --brand-on-bg: #ffffff;
            --nav-bg: rgba(2,6,23,0.86);
            --muted: rgba(255,255,255,0.9);
            --cta-bg: #ffb74d;
            --cta-color: #0b1220;
            --outline: rgba(255,255,255,0.06);
            --link-color: rgba(255,255,255,0.92);
            --link-hover: #fff;
          }

          /* Navbar background & text */
          #app-navbar {
            background: var(--nav-bg);
            color: var(--brand-on-bg);
          }

          .navbar-brand, .nav-link, .btn-outline {
            color: var(--link-color) !important;
          }

          .btn-cta {
            background: var(--cta-bg);
            color: var(--cta-color);
            border: none;
            font-weight: 600;
          }

          .btn-outline {
            background: transparent;
            border: 1px solid var(--outline);
          }

          .nav-link {
            font-weight: 500;
            position: relative;
            transition: color .18s ease;
          }

          .nav-hover::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            background: var(--cta-bg);
            left: 0;
            bottom: -6px;
            transition: width 0.22s ease;
            border-radius: 2px;
          }

          .nav-hover:hover::after {
            width: 100%;
          }

          .nav-link:hover {
            color: var(--link-hover) !important;
          }

          .active-link {
            font-weight: 700;
            color: var(--link-hover) !important;
          }

          /* Toggler icon color tweak */
          .navbar-toggler-icon {
            filter: invert(1);
            width: 22px;
            height: 18px;
            background-size: 20px 14px;
            background-image: linear-gradient(transparent, transparent);
          }

          /* small screens extra spacing inside collapsed menu */
          @media (max-width: 991px) {
            .navbar-nav {
              background: rgba(0,0,0,0.035);
              margin: 8px;
              padding: 10px;
              border-radius: 10px;
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
