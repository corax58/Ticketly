import { Status } from "@/types/ticket";
import React from "react";

export interface Props {
  status: Status;
}

const Badge = ({ status }: Props) => {
  let color = "";
  if (status == "open") {
    color = "bg-green-500";
  } else if (status == "inprogress") {
    color = "bg-yellow-400";
  } else if (status == "closed") {
    color = "bg-gray-400";
  }
  return (
    <div
      className={`text-white w-max rounded  px-1 py-px   font-semibold ${color} `}
    >
      {status.toUpperCase()}
    </div>
  );
};

export default Badge;
