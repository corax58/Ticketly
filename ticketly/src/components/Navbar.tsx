import { Bug } from "lucide-react";
import UserPopover from "./UserPopover";

const Navbar = () => {
  return (
    <div className=" w-full px-4 py-2   border-b  flex justify-center  ">
      <div className="flex items-center justify-between  container w-full">
        <div className=" flex gap-2 items-center justify-between">
          <Bug size={30} />
          <p className="text-3xl  font-bold">Ticketly</p>
        </div>
        <UserPopover />
      </div>
    </div>
  );
};

export default Navbar;
