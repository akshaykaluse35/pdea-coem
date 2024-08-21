// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace this with your authentication check

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
