import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Ticket } from "@/types/ticket";
import { QueryClient, useMutation } from "@tanstack/react-query";

export function useChangeStatus(id: string) {
  const queryClient = new QueryClient();

  const navigate = useNavigate();
  const changeStatus = async (status: string) => {
    const res = await axios.patch(
      import.meta.env.VITE_API_URL + `/ticket/${id}`,
      { status }
    );

    return res.data;
  };

  return useMutation({
    mutationFn: changeStatus,
    onSuccess: () => {
      navigate("/dashboard/" + id);
      queryClient.invalidateQueries({ queryKey: [`ticketId ${id}`] });
    },
  });
}
