import React, { useState } from "react";

const BookRide = () => {
  const [formData, setFormData] = useState({
    customerId: "",
    carId: "",
    startDate: "",
    endDate: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/bookings/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Booking Successful!");
      } else {
        setMessage(`Error: ${result}`);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Book a Ride</h2>
        {message && <p style={{ color: "green" }}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="customerId"
            placeholder="Customer ID"
            value={formData.customerId}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="carId"
            placeholder="Car ID"
            value={formData.carId}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    backgroundImage:
      'url("https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
};

export default BookRide;
