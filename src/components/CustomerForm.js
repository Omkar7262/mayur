import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from '../services/api';  // Adjust if needed, depending on the backend handling of users

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    contactNumber: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with a `createUser` API call if necessary
    createCustomer(user)  // Assuming the API is similar for registering users as for creating customers
      .then(response => {
        // Redirect to login or home after successful registration
        navigate('/login');  // Adjust to your route for logging in
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact Number</label>
          <input
            type="text"  // Changed to text to allow for formatting (if needed) or symbols like "+"
            name="contactNumber"
            value={user.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
