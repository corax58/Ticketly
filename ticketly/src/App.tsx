import { Bug } from "lucide-react";
import { Link } from "react-router";
import "./App.css";
import { Button } from "./components/ui/button";
import showcase from "/images/showcase.png";

function App() {
  return (
    <div className=" h-screen overflow-clip w-full">
      <div className=" h-20 w-full flex justify-between items-center px-5 md:px-10">
        <div className=" flex items-center gap-2">
          <Bug />
          <p className=" text-2xl md:text-3xl font-bold">Ticketly</p>
        </div>
        <Link to={"/login"}>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-4 md:px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Login
          </button>
        </Link>
      </div>
      <div className=" w-full h-full flex flex-col items-center gap-2 md:gap-5 ">
        <div className=" h-52 my-10  md:h-96 flex flex-col justify-center gap-5 px-2 items-center">
          <div className=" text-3xl md:text-4xl xl:text-5xl  font-semibold w-full   md:w-1/2 text-center">
            Manage Tickets with Role-Based Access
          </div>
          <p className=" text-lg md:text-xl xl:text-2xl md:w-2/3 text-center">
            Seamless Ticket Creation for Different User Roles – Empowering
            Admins, Managers, and Users
          </p>
          <Link to={"/login"}>
            <Button className="  font-semibold text-lg w-36 xl:w-48 py-6">
              Get Started
            </Button>
          </Link>
        </div>
        <div className=" w-[300px] md:w-[600px] lg:w-[800px] p-5 md:p-10   rounded-3xl md:rounded-4xl bg-sky-300 ">
          <img
            src={showcase}
            alt="show caseimage"
            className=" object-contain rounded-2xl md:rounded-4xl border"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
