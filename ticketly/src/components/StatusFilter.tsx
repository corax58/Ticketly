import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";

const StatusFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status: string =
    searchParams.get("status") == null ? "all" : searchParams.get("status")!;
  return (
    <Select
      defaultValue={status}
      onValueChange={(value) => {
        if (value == "all") {
          setSearchParams();
        } else {
          setSearchParams({ status: value });
        }
      }}
    >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="open">Open</SelectItem>
        <SelectItem value="inprogress">In Progess</SelectItem>
        <SelectItem value="closed">Closed</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default StatusFilter;
