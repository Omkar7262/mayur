import axios from 'axios';

const API_URL = 'http://localhost:8080/admin'; // Adjust backend URL if needed

// Admin Login
export const loginAdmin = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data; 
    } catch (error) {
        throw error.response?.data || "Login failed!";
    }
};

// Fetch All Bookings
export const fetchAllBookings = async () => {
    try {
        const response = await axios.get(`${API_URL}/bookings`);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to fetch bookings!";
    }
};

// Add a Car
export const addCar = async (carData) => {
    try {
        const response = await axios.post(`${API_URL}/addCar`, carData);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to add car!";
    }
};
