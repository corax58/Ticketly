import api from "@/api/axiosClient";
import { Ticket } from "@/types/ticket";
import { useQuery } from "@tanstack/react-query";

export function useFetchLatestTickets() {
  const fetchData = async () => {
    const res = await api.get<Ticket[]>("/dashboard/latest-tickets");

    return res.data;
  };

  return useQuery({
    queryFn: fetchData,
    queryKey: ["latest-ticket"],
  });
}
