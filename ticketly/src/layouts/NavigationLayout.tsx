import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router";

const NavigationLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavigationLayout;
