import React from "react";
import { Navigate } from "react-router";

const Admin = () => {
  return <Navigate to={"/admin/all-tickets"} />;
};

export default Admin;
