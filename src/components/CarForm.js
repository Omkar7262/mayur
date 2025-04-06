import React, { useState } from 'react';
import { addCar } from '../services/adminService';

const CarForm = () => {
    const [car, setCar] = useState({ brand: '', model: '', registrationNumber: '', status: 'AVAILABLE', pricePerDay: '', city: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCar(car);
            setMessage('Car added successfully!');
            setCar({ brand: '', model: '', registrationNumber: '', status: 'AVAILABLE', pricePerDay: '', city: '' });
        } catch (err) {
            setMessage(err);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2>Add New Car</h2>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="brand" placeholder="Brand" value={car.brand} onChange={handleChange} required /><br />
                    <input type="text" name="model" placeholder="Model" value={car.model} onChange={handleChange} required /><br />
                    <input type="text" name="registrationNumber" placeholder="Registration Number" value={car.registrationNumber} onChange={handleChange} required /><br />
                    <input type="number" name="pricePerDay" placeholder="Price Per Day" value={car.pricePerDay} onChange={handleChange} required /><br />
                    <input type="text" name="city" placeholder="City" value={car.city} onChange={handleChange} required /><br />
                    <button type="submit">Add Car</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundImage: 'url("https://content.jdmagicbox.com/v2/comp/mumbai/q9/022pxx22.xx22.250103165947.s1q9/catalogue/q44reusueirvrkh-3d732jalmp.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: 'white',
        textAlign: 'center',
        width: '70%',
        maxWidth: '800px',
        fontSize: '18px',  // Increased font size for the content
    },
    h2: {
        fontSize: '24px', // Larger font size for the heading
        fontWeight: 'bold',
    },
    input: {
        fontSize: '16px',  // Larger font size for inputs
    },
    button: {
        fontSize: '18px',  // Larger font size for button
    },
};

export default CarForm;
