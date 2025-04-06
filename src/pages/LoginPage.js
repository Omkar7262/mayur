import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        const response = await axios.post('http://localhost:8080/customers/login', {
          email,
          password,
        });

        if (response.status === 200) {
          const customerId  = response.data.id;

          // Store customerId in localStorage to use for booking
          localStorage.setItem('customerId', customerId);

          alert('Login successful!');
          navigate('/customer-dashboard'); // Redirect to the customer dashboard
        } else {
          alert('Invalid login credentials');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  const loginPageStyle = {
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
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '10px',
  };

  return (
    <div style={loginPageStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ fontSize: '24px', color: '#fff' }}>
          {isRegistering ? 'Register' : 'User Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>

        {/* Register Button */}
        {/* <button
          onClick={() => setIsRegistering(true)}
          style={{ ...buttonStyle, backgroundColor: '#28a745' }}
        >
          Don't have an account? Register
        </button> */}
        <button
        onClick={() => navigate('/register')} // ✅ Navigate to Register Page
         style={{ ...buttonStyle, backgroundColor: '#28a745' }}
        >
  Don't have an account? Register
</button>

        {/* Admin Login Button */}
        <button
          onClick={() => navigate('/admin/login')}
          style={{ ...buttonStyle, backgroundColor: '#ff9800' }}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
