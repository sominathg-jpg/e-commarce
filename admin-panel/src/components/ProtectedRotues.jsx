// src/routes/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../store/useAuthStore";
const ProtectedRoute = ({ children, role }) => {
  const { user } = useUserStore();

  // If no user → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If role is required and user role doesn’t match → redirect
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise → render the protected page
  return children;
};

export default ProtectedRoute;
