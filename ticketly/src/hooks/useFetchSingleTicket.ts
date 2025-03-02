import { Ticket } from "@/types/ticket";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchSingleTicket(id: string) {
  const fetchData = async () => {
    const res = await axios.get<Ticket>(
      import.meta.env.VITE_API_URL + `/ticket/${id}`
    );

    return res.data;
  };

  return useQuery({
    queryFn: fetchData,
    queryKey: [`ticketId ${id}`],
    enabled: !!id,
  });
}
