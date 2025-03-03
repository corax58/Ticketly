import { DataTable } from "@/components/data-table";
import Loader from "@/components/Loader";
import StatusFilter from "@/components/StatusFilter";
import { adminColumns } from "@/components/tables/tickets/columns";
import { useFetchTickets } from "@/hooks/useFetchTickets";
import { Ticket } from "@/types/ticket";
import { useSearchParams } from "react-router";

export const FitlerData = (data: Ticket[], status: string | null) => {
  if (status == null) return data;
  if (data) return data.filter((ticket) => ticket.status == status);
};

const AllTickets = () => {
  const { data, isError, isLoading, error } = useFetchTickets();

  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");

  const filteredData = FitlerData(data!, status);

  if (isLoading)
    return (
      <div className=" flex w-full justify-center pt-32">
        <Loader />
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
            <div className=" flex justify-between items-center py-2 ">
              <p className=" text-xl font-bold px-2">All tickets</p>
              <StatusFilter />
            </div>

            <DataTable columns={adminColumns} data={filteredData} />
          </div>
        </div>
      </div>
    );
};

export default AllTickets;
