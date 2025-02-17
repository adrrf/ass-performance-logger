import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { getRecordsByScope } from "@/api/db";

const chartConfig = {
  mongo: {
    label: "Mongo",
    color: "#11ED64",
  },
  mariadb: {
    label: "MariaDB",
    color: "#0CB6F9",
  },
  atlas: {
    label: "Atlas",
    color: "#B45AF2",
  },
} satisfies ChartConfig;

interface ChartDataPoint {
  name: string;
  scope: string;
  mongo?: number;
  mariadb?: number;
  atlas?: number;
}

export function TimeChart(props: { database: string; scope: string }) {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    async function fetchChartData(database: string, scope: string) {
      const records = await getRecordsByScope(scope);
      switch (database) {
        case "MongoDB":
          setChartData(records.map((d) => ({ name: d.name, mongo: d.mongo })));
          break;
        case "MariaDB":
          setChartData(records.map((d) => ({ name: d.name, mariadb: d.mariadb })));
          break;
        case "Atlas":
          setChartData(records.map((d) => ({ name: d.name, atlas: d.atlas })));
          break;
        case "Global":
          setChartData(records);
          break;
      }
    }
    fetchChartData(props.database, props.scope);
  }, [props.database, props.scope]);

  return (
    <ChartContainer config={chartConfig} className="p-4">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={true} />
        <XAxis dataKey="name" tickLine={true} axisLine={true} tickMargin={8} />
        <YAxis tickLine={true} axisLine={true} tickMargin={8} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel={true} />} />
        <Line dataKey="mongo" type="monotone" stroke="var(--color-mongo)" strokeWidth={2} dot={false} />
        <Line dataKey="mariadb" type="monotone" stroke="var(--color-mariadb)" strokeWidth={2} dot={false} />
        <Line dataKey="atlas" type="monotone" stroke="var(--color-atlas)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  );
}
