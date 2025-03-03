import api from "@/api/axiosClient";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchUserTickets(id: string | undefined) {
  const fetchData = async () =>
    api.post(`/user/tickets`, { userId: id }).then((res) => res.data);

  return useQuery({
    queryKey: ["userTickets", id],
    queryFn: fetchData,
    enabled: !!id,
  });
}
