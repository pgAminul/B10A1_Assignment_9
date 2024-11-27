import React, { useContext } from "react";
import { ContextProvider } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Loader";

export default function PrivetRouter({ children }) {
  const { user, loading } = useContext(ContextProvider);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location.pathname }} />;
}
