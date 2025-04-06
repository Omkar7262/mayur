import axios from 'axios';

// Define the backend base URL
const BASE_URL = 'http://localhost:8080'; // Ensure your backend follows this structure

// Function to get auth headers if needed
const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  return token ? { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } } : { headers: { 'Content-Type': 'application/json' } };
};

/* ==============================
   CUSTOMER MANAGEMENT API CALLS
   ============================== */

// Fetch all customers
export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/customers`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

// Fetch a single customer by ID
export const getCustomerById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/customers/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error fetching customer with ID ${id}:`, error);
    throw error;
  }
};

// Create a new customer
export const createCustomer = async (customer) => {
  try {
    const response = await axios.post(`${BASE_URL}/customers`, customer, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error creating customer:', error.response?.data || error.message);
    throw error;
  }
};

// Update customer details
export const updateCustomer = async (id, customer) => {
  try {
    const response = await axios.put(`${BASE_URL}/customers/${id}`, customer, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error updating customer with ID ${id}:`, error);
    throw error;
  }
};

// Delete a customer
export const deleteCustomer = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/customers/${id}`, getAuthHeaders());
  } catch (error) {
    console.error(`Error deleting customer with ID ${id}:`, error);
    throw error;
  }
};

/* ==============================
   CAR MANAGEMENT API CALLS
   ============================== */

// Fetch all available cars
export const getAllCars = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/all`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

// Fetch car details by ID
export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with ID ${id}:`, error);
    throw error;
  }
};

/* ==============================
   BOOKING MANAGEMENT API CALLS
   ============================== */

// Book a car (Customer must be logged in)
export const bookCar = async (customerId, carId, startDate, endDate) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/bookings/book`,
      { customerId, carId, startDate, endDate },
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error('Error booking the car:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch all bookings (Admin access)
export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bookings/all`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    throw error;
  }
};

// Fetch bookings by customer ID
export const getBookingsByCustomer = async (customerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/bookings/customer/${customerId}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error fetching bookings for customer ID ${customerId}:`, error);
    throw error;
  }
};

// Cancel a booking
export const cancelBooking = async (bookingId) => {
  try {
    await axios.delete(`${BASE_URL}/bookings/${bookingId}`, getAuthHeaders());
  } catch (error) {
    console.error(`Error canceling booking with ID ${bookingId}:`, error);
    throw error;
  }
};
