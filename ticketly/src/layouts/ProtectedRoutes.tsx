import { loadUser } from "@/store/features/authSlice";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
