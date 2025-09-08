import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore"; // adjust path

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useAuthStore();

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
