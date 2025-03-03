import api from "@/api/axiosClient";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export function useDeleteTicket(id: string) {
  const queryClient = new QueryClient();

  const navigate = useNavigate();

  const deleteTicket = async () => {
    const res = await api.delete(`/ticket/${id}`);

    return res.data;
  };

  return useMutation({
    mutationFn: deleteTicket,
    onSuccess: () => {
      navigate("/my-tickets");
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });
}
