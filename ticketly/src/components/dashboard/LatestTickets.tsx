import Loader from "../Loader";
import { useFetchLatestTickets } from "@/hooks/useFetchLatestTicket";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Badge from "../Badge";
import { Link } from "react-router";

const LatestTickets = () => {
  const { data, isLoading, isError } = useFetchLatestTickets();

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
      <Card className="  w-full md:w-96 shadow-none">
        <CardHeader>
          <CardTitle className=" text-xl">Latest tickets</CardTitle>
          <CardDescription>the latest 5 tickets</CardDescription>
        </CardHeader>
        <CardContent className=" flex flex-col gap-2">
          {data.map((ticket) => (
            <div
              key={ticket._id}
              className=" w-full flex justify-between border-b pb-2"
            >
              <Link
                to={`/admin/all-tickets/${ticket._id}`}
                className=" flex flex-col group"
              >
                <p className="font-semibold text-lg text-ellipsis truncate group-hover:underline  w-40 lg:w-52">
                  {ticket.title}
                </p>
                <div className=" text-xs font-thin">
                  <Badge status={ticket.status} />
                </div>
              </Link>
              <p className=" text-sm">
                {ticket.createdAt.toString().slice(0, 10)}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    );
};

export default LatestTickets;
