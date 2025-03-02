import { DataTable } from "@/components/data-table";
import Loader from "@/components/Loader";
import { adminColumns } from "@/components/tables/tickets/columns";
import { useFetchTickets } from "@/hooks/useFetchTickets";

const AllTickets = () => {
  const { data, error, isError, isLoading } = useFetchTickets();

  if (isLoading)
    return (
      <div className=" flex w-full justify-center pt-32">
        <Loader />
      </div>
    );
  if (isError)
    return <p className=" text-red-500 p-10">Something went wrong</p>;
  if (data)
    return (
      <div className=" flex w-full justify-center pt-10">
        <div className=" container">
          <DataTable columns={adminColumns} data={data} />
        </div>
      </div>
    );
};

export default AllTickets;
