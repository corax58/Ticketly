import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { chartData } from "@/pages/Admin/Dashboard";

const chartConfig = {
  open: {
    label: "Open",
    color: "#2563eb",
  },
  inprogress: {
    label: "In Progress",
    color: "#60a5fa",
  },
  closed: {
    label: "Closed",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const StatusBarchart = ({ chartData }: { chartData: chartData[] }) => {
  return (
    <Card className="   shadow-none">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>All time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-80 w-full -ml-5  ">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis />
            <Bar dataKey="value" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total tickets
        </div>
      </CardFooter>
    </Card>
  );
};

export default StatusBarchart;
