import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect } from "react";

import { loadUser, logoutUser } from "@/store/features/authSlice";
import { RootState } from "@/store/store";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { Button } from "./ui/button";

const UserPopover = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="flex items-center">
      {isAuthenticated ? (
        <>
          <Popover>
            <PopoverTrigger className="">
              <Avatar className=" cursor-pointer ">
                <AvatarImage src="https://storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png" />
                <AvatarFallback>Acc</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className=" flex gap-2 flex-col w-max ">
              <div className=" flex flex-col pr-10 gap-0">
                <p className="font-semibold">{user?.name}</p>
                <p className="font-light text-sm">{user?.email}</p>
              </div>
              <div className="w-full h-px bg-neutral-300"></div>

              <button
                className="flex items-center gap-2 hover:bg-neutral-100 p-1 rounded w-full "
                onClick={() => dispatch(logoutUser())}
              >
                <LogOut size={20} className="" />
                <p className=" ">Logout</p>
              </button>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
};

export default UserPopover;
