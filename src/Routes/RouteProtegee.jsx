// src/routes/RouteProtegee.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';

const RouteProtegee = ({ children }) => {
  const { user } = useAuth();

  // Si l'utilisateur n'est pas connecté, on le redirige vers /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children; // Sinon on rend le composant normalement
};

export default RouteProtegee;
