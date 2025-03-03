import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteTicket } from "@/hooks/useDeleteTicket";
import { useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";
import Loader from "./Loader";
import { Button } from "./ui/button";

const DeleteTicket = () => {
  let { id } = useParams();

  const { isSuccess, isError, mutate, isPending } = useDeleteTicket(id!);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully deleted ticket");
    }
    if (isError) {
      toast.error("Failed to delete ticket");
    }
  }, [isSuccess, isError]);

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          variant={"destructive"}
          className=" w-36 font-semibold"
          disabled={isPending}
        >
          {isPending && <Loader />}
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            ticket and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => mutate()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTicket;
