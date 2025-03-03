import { DataTable } from "@/components/data-table";
import StatusFilter from "@/components/StatusFilter";
import { userColumns } from "@/components/tables/tickets/columns";
import { Button } from "@/components/ui/button";
import { useFetchUserTickets } from "@/hooks/useFetchUserTickets";
import { Loader } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { FitlerData } from "./Admin/AllTickets";

const MyTickets = () => {
  const userString = localStorage.getItem("user");

  const user = JSON.parse(userString!);

  const { data, isError, isLoading, error } = useFetchUserTickets(user?._id!);

  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");

  const filteredData = FitlerData(data!, status);

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
  if (filteredData)
    return (
      <div>
        <div className=" flex w-full justify-center pt-10 px-5">
          <div className=" container">
            <div className=" flex justify-between items-end py-2">
              <p className=" text-xl font-bold">My tickets</p>
              <div className="flex gap-2 flex-col-reverse md:flex-row items-end">
                <StatusFilter />
                <Link to={"/my-tickets/new"}>
                  <Button>New ticket</Button>
                </Link>
              </div>
            </div>
            <DataTable columns={userColumns} data={filteredData} />
          </div>
        </div>
      </div>
    );
};

export default MyTickets;
