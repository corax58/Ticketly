import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchUserTickets(id: string | undefined) {
  const fetchData = async () =>
    axios
      .post(`${import.meta.env.VITE_API_URL}/user/tickets`, { userId: id })
      .then((res) => res.data);

  return useQuery({
    queryKey: ["userTickets", id],
    queryFn: fetchData,
    enabled: !!id,
  });
}
