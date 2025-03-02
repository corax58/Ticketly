import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export function useCreateTicket() {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const create = async (values: any) =>
    await axios
      .post("http://localhost:4000/api/ticket", values)
      .then((res) => res.data);

  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });

      navigate("/my-tickets");
    },
  });
}
