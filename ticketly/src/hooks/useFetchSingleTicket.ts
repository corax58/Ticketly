import api from "@/api/axiosClient";
import { Ticket } from "@/types/ticket";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchSingleTicket(id: string) {
  const fetchData = async () => {
    const res = await api.get<Ticket>(`/ticket/${id}`);

    return res.data;
  };

  return useQuery({
    queryFn: fetchData,
    queryKey: [`ticketId ${id}`],
    enabled: !!id,
  });
}
