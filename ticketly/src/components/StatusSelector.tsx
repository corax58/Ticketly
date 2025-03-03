import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Badge from "./Badge";
import { Status } from "@/types/ticket";
import { useParams } from "react-router";
import { useChangeStatus } from "@/hooks/useChangeStatus";
import { useEffect } from "react";
import { toast } from "sonner";

interface Props {
  status: Status;
}
const StatusSelector = ({ status }: Props) => {
  let { id } = useParams();

  const { isSuccess, isError, mutate, isPending } = useChangeStatus(id!);

  const onSubmit = async (values: string) => {
    mutate(values);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Status changed");
    }
    if (isError) {
      toast.error("Failed to change status");
    }
  }, [isSuccess, isError]);

  return (
    <Select defaultValue={status} onValueChange={onSubmit} disabled={isPending}>
      <SelectTrigger className="  w-36">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="open">
          <Badge status={"open"} />
        </SelectItem>
        <SelectItem value="inprogress">
          <Badge status={"inprogress"} />
        </SelectItem>
        <SelectItem value="closed">
          <Badge status={"closed"} />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default StatusSelector;
