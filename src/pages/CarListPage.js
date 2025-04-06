import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarListPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [bookedCars, setBookedCars] = useState(() => {
    return JSON.parse(localStorage.getItem("bookedCars")) || {};
  });

  const navigate = useNavigate();

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:8080/cars/available");
      setCars(response.data);
      setFilteredCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
      alert("Failed to fetch cars. Please try again.");
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleBookCar = (car) => {
    const customerId = localStorage.getItem("customerId");
    if (!customerId || customerId === "undefined") {
      alert("Please log in to book a car");
      navigate("/login");
      return;
    }
    navigate("/booking", { state: { car, customerId } });
  };

  const handleSearch = () => {
    if (!selectedCity) {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter((car) => car.city.toLowerCase() === selectedCity.toLowerCase()));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchBox}>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">Select Pickup City</option>
          {["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad"].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button onClick={handleSearch} style={styles.searchButton}>Search</button>
      </div>

      <h2 style={styles.header}>Available Cars</h2>
      <div className="car-list" style={styles.carList}>
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => {
            const isBooked = bookedCars[car.id] || car.status === "BOOKED";
            return (
              <div key={car.id} className="car-card" style={styles.carCard}>
                <h3>{car.brand} {car.model}</h3>
                <p>Price per day: ${car.pricePerDay}</p>
                <p>City: {car.city}</p>
                <p>Status: {isBooked ? "BOOKED" : "AVAILABLE"}</p>
                {!isBooked && (
                  <button onClick={() => handleBookCar(car)} style={styles.button}>
                    Book This Car
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p style={{ color: "white", fontSize: "18px" }}>No cars available in the selected city.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
  },
  searchBox: {
    position: "absolute",
    top: "20px",
    right: "50px",
    display: "flex",
    gap: "10px",
  },
  dropdown: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
  },
  searchButton: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
  carList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  carCard: {
    backgroundColor: "#333",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CarListPage;
