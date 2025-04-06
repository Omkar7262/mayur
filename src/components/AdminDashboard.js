import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [updatedCar, setUpdatedCar] = useState({
    brand: "",
    model: "",
    registrationNumber: "",
    status: "AVAILABLE",
    pricePerDay: "",
    city: "",
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:8080/cars/available");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const handleModify = (car) => {
    navigate(`/admin/modifyCar/${car.id}`);
  };

  const handleUpdate = async () => {
    if (!selectedCar) return;
    try {
      await axios.put(`http://localhost:8080/admin/updateCar/${selectedCar.id}`, updatedCar);
      alert("Car details updated successfully!");
      setSelectedCar(null);
      fetchCars();
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        await axios.delete(`http://localhost:8080/admin/deleteCar/${id}`);
        alert("Car deleted successfully!");
        fetchCars();
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };
  
  return (
    <div
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9916.jpg?semt=ais_hybrid')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "15px", color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>Admin Dashboard</h1>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button style={{ background: "#007bff", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer" }} onClick={() => navigate("/admin/bookings")}>
          View All Bookings
        </button>
        <button style={{ background: "#28a745", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer" }} onClick={() => navigate("/admin/addCar")}>
          Add New Car
        </button>
      </div>

      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>Manage Cars</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", width: "90%" }}>
        {cars.map((car) => (
          <div key={car.id} style={{ background: "rgba(255, 255, 255, 0.9)", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>{car.brand} {car.model}</h2>
            <p>Reg No: {car.registrationNumber}</p>
            <p>Status: {car.status}</p>
            <p>Price/Day: ₹{car.pricePerDay}</p>
            <p>City: {car.city}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button style={{ background: "#ffc107", color: "white", padding: "8px 12px", borderRadius: "5px", border: "none", cursor: "pointer" }} onClick={() => handleModify(car)}>Modify</button>
              <button style={{ background: "#dc3545", color: "white", padding: "8px 12px", borderRadius: "5px", border: "none", cursor: "pointer" }} onClick={() => handleDelete(car.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
