import { ticketSchema } from "@/schemas/ticketSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCreateTicket } from "@/hooks/useCreateTicket";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const NewTicketForm = () => {
  const { mutate, isPending, error, isError, isSuccess } = useCreateTicket();

  const user = useSelector((state: RootState) => state.auth.user);

  const form = useForm<z.infer<typeof ticketSchema>>({
    resolver: zodResolver(ticketSchema),
  });

  async function onSubmit(values: z.infer<typeof ticketSchema>) {
    await mutate({ ...values, userId: user?._id });
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success("Ticket created successfully.");
    }
    if (isError) {
      toast.error(error.message);
    }
  }, [isSuccess, isError]);

  return (
    <div className=" px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <SimpleMDE {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">{isPending ? "Submiting..." : "Submit"}</Button>
        </form>
        <p></p>
      </Form>
    </div>
  );
};

export default NewTicketForm;
