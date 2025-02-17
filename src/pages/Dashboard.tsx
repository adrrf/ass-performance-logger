import Page from "./BasicPage";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EndpointSelect } from "@/components/endpoint-select";
import { useState } from "react";
import { TimeChart } from "@/components/linechart";
import { ResetButton } from "@/components/reset-button";

const databases = ["Global", "MongoDB", "MariaDB", "Atlas"];
const scopes = [
  {
    section: "Services",
    items: ["Global", "Orders", "Restaurants", "Users", "Auth"],
  },
  {
    section: "Endpoints",
    items: [
      "/api/orders",
      "/api/orders/{id}",
      "/api/restaurants",
      "/api/restaurants/{id}",
      "/api/users",
      "/api/users/{id}",
      "/api/auth/login",
      "/api/auth/register",
    ],
  },
];

export default function Dashboard() {
  const [selectedDatabase, setSelectedDatabase] = useState("Global");
  const [selectedScope, setSelectedScope] = useState<string>("Global");

  return (
    <Page name="Dashboard">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Response Time Dashboard</h1>
        </div>

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

          <EndpointSelect
            options={scopes}
            selected={selectedScope}
            onChange={setSelectedScope}
            placeholder="Select endpoint"
            className="w-[250px]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-0">
          <div className="min-h-[10vh] flex-1 rounded-xl bg-muted/50">
            <TimeChart database={selectedDatabase} scope={selectedScope} />
          </div>
        </div>
      </div>
    </Page>
  );
}
