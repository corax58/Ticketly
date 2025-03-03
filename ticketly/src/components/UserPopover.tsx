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
import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const UserPopover = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

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
              <AlertDialog>
                <AlertDialogTrigger>
                  <button className="flex items-center cursor-pointer gap-2 hover:bg-neutral-100 p-1 rounded w-full ">
                    <LogOut size={20} className="" />
                    <p className=" ">Logout</p>
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure you want to logout?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        dispatch(logoutUser());
                        navigate("/login");
                      }}
                    >
                      Yes
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
