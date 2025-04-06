import React, { useEffect, useState } from 'react';
import { getAllCustomers, deleteCustomer } from '../services/api';
import { Link } from 'react-router-dom';
import CustomerItem from './CustomerItem';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers()
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    deleteCustomer(id)
      .then(() => {
        setCustomers(customers.filter(customer => customer.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Customer List</h2>
      <Link to="/customers/form">Add New Customer</Link>
      <ul>
        {customers.map((customer) => (
          <CustomerItem
            key={customer.id}
            customer={customer}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
