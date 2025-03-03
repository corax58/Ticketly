import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const NavigationLayout = () => {
  return (
    <>
      <Navbar />
      <div className=" pt-10">
        <Outlet />
      </div>
    </>
  );
};

export default NavigationLayout;
