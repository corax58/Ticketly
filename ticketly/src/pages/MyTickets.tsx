import { DataTable } from "@/components/data-table";
import { userColumns } from "@/components/tables/tickets/columns";
import { Button } from "@/components/ui/button";
import { useFetchUserTickets } from "@/hooks/useFetchUserTickets";
import { Loader } from "lucide-react";
import { Link } from "react-router";

const MyTickets = () => {
  const userString = localStorage.getItem("user");

  const user = JSON.parse(userString!);

  const { data, isError, isLoading, error } = useFetchUserTickets(user?._id!);

  if (isLoading)
    return (
      <div className=" flex w-full justify-center pt-32">
        <Loader className=" animate-spin" />
      </div>
    );
  if (isError)
    return (
      <p className=" text-red-500 p-10">
        Something went wrong, {error.message}
      </p>
    );
  if (data)
    return (
      <div>
        <div className=" flex w-full justify-center pt-10">
          <div className=" container">
            <div className=" flex justify-between items-center py-2">
              <p className=" text-xl font-bold">My tickets</p>
              <Link to={"/my-tickets/new"}>
                <Button>New ticket</Button>
              </Link>
            </div>
            <DataTable columns={userColumns} data={data} />
          </div>
        </div>
      </div>
    );
};

export default MyTickets;
