import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Ticket } from "@/types/ticket";
import { QueryClient, useMutation } from "@tanstack/react-query";
import api from "@/api/axiosClient";

export function useChangeStatus(id: string) {
  const queryClient = new QueryClient();

  const navigate = useNavigate();
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
