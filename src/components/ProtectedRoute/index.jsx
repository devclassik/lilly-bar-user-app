import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Helper/Loader";
import { useMemory } from "../../Hooks/useMemory";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useMemory();

  if (loading) {
    return (
      <div className={`appie-loader ${loading ? "active" : ""}`}>
        <Loader />
      </div>
    ); 
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
