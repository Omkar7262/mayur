import React, { useState, useEffect } from 'react';
import { getCustomerById } from '../services/api';
import { useParams } from 'react-router-dom';

const CustomerDetailPage = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    getCustomerById(id)
      .then((response) => setCustomer(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return customer ? (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Contact: {customer.contactNumber}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CustomerDetailPage;
