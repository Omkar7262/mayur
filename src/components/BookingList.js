import React, { useEffect, useState } from 'react';
import { fetchAllBookings } from '../services/adminService';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadBookings = async () => {
            try {
                const data = await fetchAllBookings();
                setBookings(data);
            } catch (err) {
                setError(err);
            }
        };
        loadBookings();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2>All Bookings</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <ul>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <li key={booking.id}>
                                <strong>{booking.customer.name}</strong> booked {booking.car.brand} - {booking.car.model}
                            </li>
                        ))
                    ) : (
                        <p>No bookings found</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundImage: 'url("https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg")',
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
    },
};

export default BookingList;
