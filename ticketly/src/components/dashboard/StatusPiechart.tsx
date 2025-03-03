"use client";

import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartData } from "@/pages/Admin/Dashboard";

const chartConfig = {
  visitors: {
    label: "value",
  },
  open: {
    label: "Open",
    color: "hsl(var(--chart-1))",
  },
  inprogress: {
    label: "In Progress",
    color: "hsl(var(--chart-2))",
  },
  closed: {
    label: "Closed",
  },
} satisfies ChartConfig;

const StatusPiechart = ({
  chartData,
  total,
}: {
  chartData: chartData[];
  total: number;
}) => {
  return (
    <Card className="flex flex-col shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>Ticket Status Overview</CardTitle>
        <CardDescription>All time</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] h-full border w-72 xl:w-96  rounded-2xl"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Tickets
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total created tickets
        </div>
      </CardFooter>
    </Card>
  );
};

export default StatusPiechart;
