import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentGateway = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { car, days, totalCost } = location.state || {};

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill all payment details.");
      return;
    }

    alert("Payment successful! Car booked successfully.");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Payment Gateway</h2>
      <h3>{car?.brand} {car?.model}</h3>
      <p>Total Amount: ${totalCost}</p>
      <div style={styles.inputGroup}>
        <label>Card Number</label>
        <input 
          type="text" 
          value={cardNumber} 
          onChange={(e) => setCardNumber(e.target.value)} 
          placeholder="1234 5678 9012 3456" 
          maxLength="16" 
          style={styles.input}
        />
      </div>
      <div style={styles.row}>
        <div style={styles.inputGroup}>
          <label>Expiry Date</label>
          <input 
            type="text" 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
            placeholder="MM/YY" 
            maxLength="5" 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>CVV</label>
          <input 
            type="password" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            placeholder="123" 
            maxLength="3" 
            style={styles.input}
          />
        </div>
      </div>
      <button onClick={handlePayment} style={styles.button}>Pay Now</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    maxWidth: "400px",
    margin: "50px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
};

export default PaymentGateway;
