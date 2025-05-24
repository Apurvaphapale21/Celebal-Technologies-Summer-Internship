import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();

  useEffect(() => {
    alert("✅ Form submitted successfully!");
  }, []);

  if (!state) {
    return <p>No data submitted.</p>;
  }

  return (
    <div className="success-page">
      <h2>✅ Form Submitted Successfully!</h2>
      <h3>Submitted Details:</h3>
      <ul>
        <li><strong>First Name:</strong> {state.firstName}</li>
        <li><strong>Last Name:</strong> {state.lastName}</li>
        <li><strong>Username:</strong> {state.username}</li>
        <li><strong>Email:</strong> {state.email}</li>
        <li><strong>Phone:</strong> {state.phoneCode} {state.phoneNumber}</li>
        <li><strong>Country:</strong> {state.country}</li>
        <li><strong>City:</strong> {state.city}</li>
        <li><strong>PAN No:</strong> {state.pan}</li>
        <li><strong>Aadhar No:</strong> {state.aadhar}</li>
      </ul>
    </div>
  );
};

export default Success;
