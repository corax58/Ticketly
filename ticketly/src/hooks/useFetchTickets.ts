import api from "@/api/axiosClient";
import { Ticket } from "@/types/ticket";
import { useQuery } from "@tanstack/react-query";

export function useFetchTickets() {
  const fetchData = async () => {
    const res = await api.get<Ticket[]>("/ticket");

    return res.data;
  };

  return useQuery({
    queryFn: fetchData,
    queryKey: ["tickets"],
  });
}
