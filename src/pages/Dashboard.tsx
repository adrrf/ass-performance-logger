import Page from "./BasicPage";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { EndpointSelect } from "@/components/endpoint-select";
import { useState } from "react";
import { TimeChart } from "@/components/linechart";

const databases = ["Global", "MongoDB", "MariaDB", "Atlas"];
const microservices = ["Global", "Orders", "Restaurants", "Users", "Auth"];
const endpoints = [
  "/api/orders",
  "/api/orders/{id}",
  "/api/restaurants",
  "/api/restaurants/{id}",
  "/api/users",
  "/api/users/{id}",
  "/api/auth/login",
  "/api/auth/register",
];

export default function Dashboard() {
  const [selectedDatabase, setSelectedDatabase] = useState("Global");
  const [selectedMicroservice, setSelectedMicroservice] = useState("Global");
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>("");

  return (
    <Page name="Dashboard">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Response Time Dashboard</h1>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <Tabs value={selectedDatabase} onValueChange={setSelectedDatabase} className="flex-grow sm:flex-grow-0">
            <TabsList className="grid w-full grid-cols-4">
              {databases.map((db) => (
                <TabsTrigger key={db} value={db}>
                  {db}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Select value={selectedMicroservice} onValueChange={setSelectedMicroservice}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Microservice" />
            </SelectTrigger>
            <SelectContent>
              {microservices.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <EndpointSelect
            options={endpoints}
            selected={selectedEndpoint}
            onChange={setSelectedEndpoint}
            placeholder="Select endpoint"
            className="w-[250px]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-0">
          <div className="min-h-[10vh] flex-1 rounded-xl bg-muted/50">
            <TimeChart database={selectedDatabase} microservice={selectedMicroservice} endpoint={selectedEndpoint} />
          </div>
          {
            // todo stats
          }
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
              <span>WIP</span>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
              <span>WIP</span>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
              <span>WIP</span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
