import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {};

  const [days, setDays] = useState(1);
  const totalCost = days * car.pricePerDay;

  const handlePayment = () => {
    const customerId = localStorage.getItem("customerId");

    if (!customerId || customerId === "undefined") {
      alert("Please log in to proceed with the payment");
      navigate("/login");
      return;
    }

    navigate("/payment", { state: { car, days, totalCost } });
  };

  return (
    <div style={styles.container}>
      <h2>Booking Confirmation</h2>
      <h3>{car?.brand} {car?.model}</h3>
      <p>Price per day: ${car?.pricePerDay}</p>
      <label>
        Select Number of Days:
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
          min="1"
          style={styles.input}
        />
      </label>
      <h3>Total Cost: ${totalCost}</h3>
      <button onClick={handlePayment} style={styles.button}>Pay & Book</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  input: {
    marginLeft: "10px",
    padding: "5px",
    fontSize: "16px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BookingPage;
