import { loadUser } from "@/store/features/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
