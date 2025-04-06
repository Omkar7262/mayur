import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  const handleSearch = () => {
    navigate("/login");
  };

  return (
    <div
  style={{
    minHeight: "100vh",
    backgroundImage: "url('/Untitled design.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>

      {/* Navigation Bar */}
      <nav
  style={{
    width: "100%",
    background: "rgba(0, 0, 0, 0.8)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,
  }}
>
  <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Car Rental</h1>
  <ul
    style={{
      display: "flex",
      gap: "20px",
      listStyle: "none",
      marginLeft: "-100px", // Moves the nav items slightly to the left
    }}
  >
    {["Home", "About", "Reviews", "Contact Us"].map((item, index) => (
      <li
        key={index}
        style={{ cursor: "pointer", transition: "0.3s" }}
        onMouseOver={(e) => (e.target.style.color = "yellow")}
        onMouseOut={(e) => (e.target.style.color = "white")}
      >
        {item}
      </li>
    ))}
  </ul>
</nav>


      {/* Search Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            width: "90%",
            maxWidth: "400px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Where are you going?</h2>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />

          {/* Date & Time Inputs */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "15px" }}>
            <div style={{ width: "50%" }}>
              <label>Pick-up Date</label>
              <input
                type="date"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>
            <div style={{ width: "50%" }}>
              <label>Pick-up Time</label>
              <input
                type="time"
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "15px" }}>
            <div style={{ width: "50%" }}>
              <label>Drop-off Date</label>
              <input
                type="date"
                value={dropOffDate}
                onChange={(e) => setDropOffDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>
            <div style={{ width: "50%" }}>
              <label>Drop-off Time</label>
              <input
                type="time"
                value={dropOffTime}
                onChange={(e) => setDropOffTime(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              background: "yellow",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "gold")}
            onMouseOut={(e) => (e.target.style.background = "yellow")}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
