import { Bug } from "lucide-react";
import UserPopover from "./UserPopover";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className=" w-full px-4 py-2   border-b  flex justify-center  ">
      <div className="flex items-center justify-between  container w-full">
        <Link to={"/"} className=" flex gap-2 items-center justify-between">
          <Bug size={30} />
          <p className="text-3xl  font-bold">Ticketly</p>
        </Link>
        <div className=" flex gap-5 items-center">
          <Link to="/admin">Admin</Link>
          <UserPopover />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
