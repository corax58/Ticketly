import api from "@/api/axiosClient";
import { QueryClient, useMutation } from "@tanstack/react-query";

export function useChangeStatus(id: string) {
  const queryClient = new QueryClient();

  const changeStatus = async (status: string) => {
    const res = await api.patch(`/ticket/${id}`, { status });

    return res.data;
  };

  return useMutation({
    mutationFn: changeStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`ticketId ${id}`] });
    },
  });
}
