import { useState } from "react";
import { Bug, Menu, X } from "lucide-react";
import UserPopover from "./UserPopover";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const role = useSelector((state: RootState) => state.auth.user?.role);

  const isAdmin = role == "admin";

  return (
    <div className="  fixed z-50 top-0 w-full px-4 md:px-10 py-2 bg-white border-b flex justify-center">
      <div className="flex items-center flex-col md:flex-row justify-between container w-full">
        <div className=" flex w-full justify-between">
          <Link to={"/"} className="flex gap-2 items-center">
            <Bug size={30} />
            <p className="text-3xl font-bold">Ticketly</p>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 w-full justify-end ">
          <NavLink
            to="/my-tickets"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            My Tickets
          </NavLink>

          {isAdmin && (
            <>
              <NavLink
                to="/admin/all-tickets"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                All Tickets
              </NavLink>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                Dashboard
              </NavLink>
            </>
          )}
          <UserPopover />
        </div>

        {isOpen && (
          <div className="  w-full bg-white md:hidden flex flex-col items-center gap-4 py-4">
            <NavLink
              to="/my-tickets"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              My Tickets
            </NavLink>
            {isAdmin && (
              <>
                <NavLink
                  to="/admin/all-tickets"
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-normal"
                  }
                >
                  All Tickets
                </NavLink>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-normal"
                  }
                >
                  Dashboard
                </NavLink>
              </>
            )}
            <UserPopover />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
