import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Ticket } from "@/types/ticket";
import { Skeleton } from "./ui/skeleton";
import { DataTable } from "./data-table";

const SkeletonColumns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "title",
    header: () => {
      return <Skeleton className="h-5 w-[300px] rounded-sm" />;
    },
    cell: () => {
      return <Skeleton className="h-5 w-[300px] rounded-sm" />;
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return <Skeleton className="h-5 w-[160px]" />;
    },
    cell: () => {
      return <Skeleton className="h-5 w-[160px]" />;
    },
  },
  {
    accessorKey: "created",
    header: () => {
      return <Skeleton className="h-5 w-[160px]" />;
    },
    cell: () => {
      return <Skeleton className="h-5 w-[160px]" />;
    },
  },
];
const tickets: Ticket[] = [
  {
    _id: "1",
    createdAt: new Date(),
    description: "Dummy description 1",
    status: "open",
    title: "Dummy title 1",
    user: "Dummy user 1",
  },
  {
    _id: "2",
    createdAt: new Date(),
    description: "Dummy description 2",
    status: "inprogress",
    title: "Dummy title 2",
    user: "Dummy user 2",
  },
  {
    _id: "3",
    createdAt: new Date(),
    description: "Dummy description 3",
    status: "open",
    title: "Dummy title 3",
    user: "Dummy user 3",
  },
  {
    _id: "4",
    createdAt: new Date(),
    description: "Dummy description 4",
    status: "closed",
    title: "Dummy title 4",
    user: "Dummy user 4",
  },
];

const TableSkeleton = () => {
  return (
    <div>
      <DataTable columns={SkeletonColumns} data={tickets} />
    </div>
  );
};

export default TableSkeleton;
