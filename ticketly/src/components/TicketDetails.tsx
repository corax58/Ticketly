import React from "react";
import Loader from "./Loader";
import { useParams } from "react-router";
import { useFetchSingleTicket } from "@/hooks/useFetchSingleTicket";
import DeleteTicket from "./DeleteTicket";
import StatusSelector from "./StatusSelector";
import ReactMarkdown from "react-markdown";
import Badge from "./Badge";

const TicketDetails = () => {
  let { id } = useParams();
  const { data, error, isError, isLoading } = useFetchSingleTicket(id!);

  if (isError)
    return <p className=" text-red-500 p-10">Something went wrong</p>;
  if (isLoading)
    return (
      <div className=" flex w-full justify-center pt-32">
        <Loader />
      </div>
    );
  if (data)
    return (
      <div className=" flex gap-5  w-full justify-center pt-10">
        <div className="container flex gap-5 items-start">
          <div className="w-full flex flex-col gap-2 border rounded-xl px-4 py-4">
            <div className=" w-full flex gap-0  flex-col">
              <p className=" flex justify-between  text-2xl leading-4 font-semibold pb-2 ">
                {data.title}
              </p>
              <p className=" flex gap-4 items-center">
                {data.createdAt.toString().slice(0, 10)}
                <div className=" text-xs">
                  <Badge status={data.status} />
                </div>
              </p>
            </div>
            <div className=" w-full h-px bg-neutral-200"></div>
            <div className=" prose min-h-96">
              <ReactMarkdown>{data.description}</ReactMarkdown>
            </div>
          </div>
          <div className=" container flex flex-col items-center gap-5 w-max justify-end  pb-10 ">
            <DeleteTicket />
            <StatusSelector status={data.status} />
          </div>
        </div>
      </div>
    );
};

export default TicketDetails;
