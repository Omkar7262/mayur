import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ModifyCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [updatedCar, setUpdatedCar] = useState({
    brand: "",
    city: "",
    model: "",
    pricePerDay: "",
    registrationNumber: "",
  });

  useEffect(() => {
    fetchCarDetails();
  }, []);

  const fetchCarDetails = async () => {
    try {
      console.log(`Fetching car details for ID: ${id}`);
      const response = await axios.get(`http://localhost:8080/cars/${id}`);
      console.log("Car details response:", response.data);

      if (!response.data) {
        console.error("No car details found!");
        return;
      }

      setCar(response.data);
      setUpdatedCar({
        brand: response.data.brand,
        city: response.data.city,
        model: response.data.model,
        pricePerDay: response.data.pricePerDay,
        registrationNumber: response.data.registrationNumber,
      });
    } catch (error) {
      console.error("Error fetching car details:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/admin/updateCar/${id}`, updatedCar);
      alert("Car details updated successfully!");
      navigate("/admin"); // Redirect back to admin dashboard
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  if (!car) return <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>Loading car details...</p>;

  return (
    <div
      style={{
        backgroundImage: `url(https://www.carinfo.app/_next/static/media/rchero.b955c702.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ 
        background: "rgba(255, 255, 255, 0.9)", 
        padding: "20px", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", 
        width: "400px" 
      }}>
        <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}>Modify Car Details</h1>

        {/* Read-only fields */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Car ID:</label>
          <input type="text" style={{ width: "100%", padding: "8px", border: "1px solid #ddd", backgroundColor: "#eee", borderRadius: "5px" }} value={car.id} readOnly />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Status:</label>
          <input type="text" style={{ width: "100%", padding: "8px", border: "1px solid #ddd", backgroundColor: "#eee", borderRadius: "5px" }} value={car.status} readOnly />
        </div>

        {/* Editable fields */}
        {["brand", "model", "registrationNumber", "pricePerDay", "city"].map((field) => (
          <div key={field} style={{ marginBottom: "10px" }}>
            <label style={{ fontWeight: "bold", textTransform: "capitalize" }}>{field.replace(/([A-Z])/g, " $1")}:</label>
            <input
              type={field === "pricePerDay" ? "number" : "text"}
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "5px" }}
              value={updatedCar[field]}
              onChange={(e) => setUpdatedCar({ ...updatedCar, [field]: e.target.value })}
            />
          </div>
        ))}

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
          <button 
            style={{ background: "#28a745", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer", width: "48%" }}
            onClick={handleUpdate}
          >
            Save Changes
          </button>
          <button 
            style={{ background: "#6c757d", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer", width: "48%" }}
            onClick={() => navigate("/admin")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyCar;
