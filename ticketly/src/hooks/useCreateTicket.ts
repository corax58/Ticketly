import api from "@/api/axiosClient";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export function useCreateTicket() {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const create = async (values: any) =>
    await api.post("/ticket", values).then((res) => res.data);

  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });

      navigate("/my-tickets");
    },
  });
}
