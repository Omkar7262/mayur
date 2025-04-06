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
        // Redirect to login after successful registration
        navigate('/login');  // Adjust to your route for logging in
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await createCustomer(user);
  
  //     if (response) {
  //       alert('Registration successful!');
  //       navigate('/login'); // Redirect after successful registration
  //     }
  //   } catch (error) {
  //     alert('Registration failed! Please check the details.');
  //     console.error('Error creating user:', error);
  //   }
  // };

  // Inline CSS for background image
  const registerPageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://digitronsoftwares.com/assets/uploads/media-uploader/31707811332.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const formContainerStyle = {
    background: 'rgba(45, 27, 27, 0.7)',
    padding: '40px',  // Increased padding for a larger form
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '350px',  // Increased width for more space
    fontSize: '16px',  // Increased base font size
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',  // Increased font size for input fields
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',  // Increased font size for the button
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={registerPageStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ fontSize: '24px', color: '#333', textAlign: 'center' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ fontSize: '18px', color: '#333' }}>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ fontSize: '18px', color: '#333' }}>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ fontSize: '18px', color: '#333' }}>Contact Number</label>
            <input
              type="text"  // Changed to text to allow for formatting (if needed) or symbols like "+"
              name="contactNumber"
              value={user.contactNumber}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ fontSize: '18px', color: '#333' }}>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
