import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { name: "baseline", mongo: 186, mariadb: 190, atlas: 345 },
  { name: "some changes", mongo: 174, mariadb: 183, atlas: 300 },
  { name: "some x2", mongo: 104, mariadb: 113, atlas: 250 },
];

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

function getChartData(database: string, microservice: string, endpoint: string) {
  switch (database) {
    case "Global":
      return chartData;
    case "MongoDB":
      return chartData.map((d) => ({ name: d.name, mongo: d.mongo }));
    case "MariaDB":
      return chartData.map((d) => ({ name: d.name, mariadb: d.mariadb }));
    case "Atlas":
      return chartData.map((d) => ({ name: d.name, atlas: d.atlas }));
    default:
      return chartData;
  }
}

export function TimeChart(props: { database: string; microservice: string; endpoint: string }) {
  const [chartData, setChartData] = useState(getChartData(props.database, props.microservice, props.endpoint));

  useEffect(() => {
    const data = getChartData(props.database, props.microservice, props.endpoint);
    setChartData(data);
  }, [props.database, props.microservice, props.endpoint]);

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
