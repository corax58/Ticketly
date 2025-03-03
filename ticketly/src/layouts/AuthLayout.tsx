import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/my-tickets" replace /> : <Outlet />;
};

export default AuthLayout;
