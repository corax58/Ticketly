import { Navigate, Outlet } from "react-router";

const AdminRoutes = () => {
  const user = localStorage.getItem("user");

  if (user) {
    const role = JSON.parse(user).role;

    return role == "admin" ? <Outlet /> : <Navigate to="/my-tickets" replace />;
  }
  if (!user) return <Navigate to="/login" replace />;
};

export default AdminRoutes;
