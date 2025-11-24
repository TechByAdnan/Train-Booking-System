import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookTicketPage from "./pages/BookTicketPage";
import PNRSearchPage from "./pages/PNRSearchPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import Hero from "./components/Hero";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* top-level app container used by CSS flexbox */}
      <div className="app">
        <Navbar /> 

        {/* main content area that will grow and push footer down */}
        <main className="main container">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/book-ticket" element={<BookTicketPage />} />
            <Route path="/pnr-search" element={<PNRSearchPage />} />
            <Route path="/my-bookings" element={<MyBookingsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
