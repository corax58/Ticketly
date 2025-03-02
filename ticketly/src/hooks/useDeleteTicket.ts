import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Ticket } from "@/types/ticket";
import { QueryClient, useMutation } from "@tanstack/react-query";

export function useDeleteTicket(id: string) {
  const queryClient = new QueryClient();

  const navigate = useNavigate();

  const deleteTicket = async () => {
    const res = await axios.delete(
      import.meta.env.VITE_API_URL + `/ticket/${id}`
    );

    return res.data;
  };

  return useMutation({
    mutationFn: deleteTicket,
    onSuccess: () => {
      navigate("/dashboard");
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });
}
