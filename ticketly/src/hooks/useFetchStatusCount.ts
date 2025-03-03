import api from "@/api/axiosClient";
import { Ticket } from "@/types/ticket";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

type StatusCount = {
  total: number;
  openTickets: number;
  inProgressTickets: number;
  closedTickets: number;
};
export function useFetchStatusCount() {
  const fetchData = async () => {
    const res = await api.get<StatusCount>("/dashboard/status-count");

    return res.data;
  };

  return useQuery({
    queryFn: fetchData,
    queryKey: ["status-count"],
  });
}
