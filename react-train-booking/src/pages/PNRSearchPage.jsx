import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PNRSearchPage = () => {
  const [pnr, setPnr] = useState("");
  const [ticketInfo, setTicketInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setPnr(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!pnr) return;
    setLoading(true);
    setTicketInfo(null);

    try {
      const response = await axios.get(`http://localhost:8080/api/train/ticket/${pnr}`);
      setTicketInfo(response.data);
      toast.success("Ticket found!");
    } catch (error) {
      // You can inspect error.response to show more info
      toast.error("PNR not found.");
      setTicketInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (d) => {
    if (!d) return "";
    // if backend returns ISO string or epoch, adjust accordingly
    const dt = new Date(d);
    if (isNaN(dt)) return d; // return raw if can't parse
    return dt.toLocaleDateString();
  };

  const statusClass = (status) => {
    // Bootstrap 5 utility classes; change if you're not using bootstrap
    if (!status) return "badge bg-secondary";
    switch (status.toUpperCase()) {
      case "CONFIRMED":
        return "badge bg-success";
      case "WAITLIST":
        return "badge bg-danger";
      case "RAC":
      case "WL":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div className="container page-content fade-in">
      <h2 className="text-center mb-4">Search Your Ticket by PNR</h2>

      <form onSubmit={handleSearch} className="mb-3">
        <div className="row g-2 align-items-center">
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              value={pnr}
              onChange={handleInputChange}
              placeholder="Enter PNR"
              aria-label="Enter PNR"
              required
            />
          </div>
          <div className="col-sm-3 d-grid">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </form>

      {ticketInfo && (
        <div className="mt-4">
          <h3 className="mb-3">Ticket Information:</h3>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td className="fw-semibold">PNR</td>
                  <td>{ticketInfo.pnr}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Full Name</td>
                  <td>{ticketInfo.fullName}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Train Number</td>
                  <td>{ticketInfo.trainNumber}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Train Name</td>
                  <td>{ticketInfo.trainName}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Journey Date</td>
                  <td>{formatDate(ticketInfo.journeyDate)}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Source</td>
                  <td>{ticketInfo.source}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Destination</td>
                  <td>{ticketInfo.destination}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Ticket Price</td>
                  <td>{ticketInfo.ticketPrice}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Ticket Status</td>
                  <td>
                    <span className={statusClass(ticketInfo.ticketStatus)} style={{ fontSize: "14px", padding: "6px 10px" }}>
                      {ticketInfo.ticketStatus}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!ticketInfo && !loading && (
        <div className="mt-4 text-muted">
          <p>Enter a PNR and press <strong>Search</strong> to view ticket details.</p>
        </div>
      )}

      <div>
        <div className="mt-5">
  <h3 className="mb-3 text-primary fw-bold">Live Railway Information</h3>

  {/* Train Running Status Info */}
  <div className="p-3 mb-3 border rounded" style={{ background: "#e3f2fd" }}>
    <h5 className="fw-bold text-info">🚆 Train Running Update</h5>
    <p className="mb-1"><strong>Train:</strong> 12424 - New Delhi Rajdhani Express</p>
    <p className="mb-1"><strong>Current Status:</strong> <span className="badge bg-success">On Time</span></p>
    <p className="mb-0"><strong>Last Station:</strong> Agra Cantt (AGC)</p>
  </div>

  {/* Platform Announcement */}
  <div className="p-3 mb-3 border rounded" style={{ background: "#fff3cd" }}>
    <h5 className="fw-bold text-warning">📢 Platform Announcement</h5>
    <p className="mb-1"><strong>Train:</strong> 14012 - Delhi Intercity</p>
    <p className="mb-1"><strong>Expected Arrival:</strong> 07:45 AM</p>
    <p className="mb-0"><strong>Platform:</strong> <span className="badge bg-primary">Platform 5</span></p>
  </div>

  {/* Safety Tips */}
  <div className="p-3 mb-3 border rounded" style={{ background: "#e8f5e9" }}>
    <h5 className="fw-bold text-success">🛡 Passenger Safety Tips</h5>
    <ul className="mb-0">
      <li>Do not leave your luggage unattended.</li>
      <li>Use foot-over bridges while changing platforms.</li>
      <li>Report suspicious activity to railway security.</li>
    </ul>
  </div>

  {/* Railway Advertisement */}
  <div className="p-3 mb-3 border rounded" style={{ background: "#fce4ec" }}>
    <h5 className="fw-bold text-danger">📞 Railway Announcement Advertisement</h5>
    <p className="mb-1">Advertise your business through Railway Audio Announcements.</p>
    <p className="mb-0 fw-bold" style={{ fontSize: "20px" }}>Call Now: <span className="text-primary">9125757</span></p>
  </div>

  {/* Emergency Contact */}
  <div className="p-3 border rounded" style={{ background: "#f3e5f5" }}>
    <h5 className="fw-bold text-purple">🚨 Emergency Railway Helpline</h5>
    <p className="mb-1"><strong>For Security:</strong> Dial <span className="badge bg-danger">182</span></p>
    <p className="mb-0"><strong>For Medical / Assistance:</strong> Dial <span className="badge bg-secondary">138</span></p>
  </div>
</div>

      </div>
    </div>
  );
};

export default PNRSearchPage;
