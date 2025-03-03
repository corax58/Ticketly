import LatestTickets from "@/components/dashboard/LatestTickets";
import StatusBarchart from "@/components/dashboard/StatusBarchart";
import StatusPiechart from "@/components/dashboard/StatusPiechart";
import Loader from "@/components/Loader";
import { useFetchStatusCount } from "@/hooks/useFetchStatusCount";

export type chartData = {
  label: string;
  value: number;
  fill: string;
};
const Dashboard = () => {
  const { data, isLoading, isError } = useFetchStatusCount();

  const chartData: chartData[] = [
    { label: "Open", value: data?.openTickets!, fill: "cornflowerblue" },
    { label: "In Progress", value: data?.inProgressTickets!, fill: "orange" },
    { label: "Closed", value: data?.closedTickets!, fill: "hotpink" },
  ];

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
      <div className="flex w-full justify-center pt-10 px-2 xl:px-16">
        <div className=" container flex justify-between  gap-5 flex-col ">
          <div className=" flex w-full flex-col md:flex-row   gap-5 ">
            <StatusPiechart chartData={chartData} total={data.total} />
            <LatestTickets />
          </div>
          <StatusBarchart chartData={chartData} />
        </div>
      </div>
    );
};

export default Dashboard;
