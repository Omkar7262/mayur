import React from 'react';
import { Link } from 'react-router-dom';

const CustomerItem = ({ customer, onDelete }) => {
  return (
    <li>
      <h3>{customer.name}</h3>
      <p>Email: {customer.email}</p>
      <p>Contact: {customer.contactNumber}</p>
      <Link to={`/customers/form/${customer.id}`}>Edit</Link>
      <button onClick={() => onDelete(customer.id)}>Delete</button>
    </li>
  );
};

export default CustomerItem;
