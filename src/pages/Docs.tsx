import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Page from "./BasicPage";
import { Link } from "react-router-dom";

export default function Docs() {
  return (
    <Page name="Documentation">
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Documentation</h1>

          <Tabs defaultValue="getting-started" className="mb-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="upload">Data Upload</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="contributing">Contributing</TabsTrigger>
            </TabsList>

            {/* Getting Started Section */}
            <TabsContent value="getting-started">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started with ASS Performance Logger</CardTitle>
                  <CardDescription>Learn the basics of using the performance logger</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground">
                      ASS Performance Logger is a tool designed to help you monitor and analyze the performance of your
                      ASS third deliverable across different database systems. It provides insights into response times
                      and helps identify performance bottlenecks.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Performance monitoring for MongoDB, MariaDB, and Atlas</li>
                      <li>CSV data upload support</li>
                      <li>Interactive dashboards with filtering capabilities</li>
                      <li>Endpoint-specific performance analysis</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
                    <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                      <li>Prepare your performance data in CSV format</li>
                      <li>
                        Upload your data through the{" "}
                        <Link to="/ass-performance-logger/data" className="text-primary hover:underline">
                          upload page
                        </Link>
                      </li>
                      <li>
                        View results in the{" "}
                        <Link to="/ass-performance-logger/dashboard" className="text-primary hover:underline">
                          dashboard
                        </Link>
                      </li>
                    </ol>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Data Upload Section */}
            <TabsContent value="upload">
              <Card>
                <CardHeader>
                  <CardTitle>Data Upload Guide</CardTitle>
                  <CardDescription>Learn how to properly format and upload your performance data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">CSV Format</h3>
                    <p className="text-muted-foreground">
                      The CSV file should have the following columns: "scope", "mongodb+srv", "mongodb", "mariadb". You
                      can use this{" "}
                      <a
                        href="https://gist.github.com/adrrf/9aa5754e7c9100d4d15dc72061dc0749"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        script
                      </a>{" "}
                      to generate a sample CSV file. If implemented correctly, the script will generate a CSV file with
                      the specified columns when running <code>npm run test:report</code>. You will need to delete all
                      records from performance logs before running the script.
                    </p>
                    <section className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">Upload Instructions</h3>
                      <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                        <li>Ensure your CSV file follows the format above</li>
                        <li>Click the "Select File" button on the upload page</li>
                        <li>Select your CSV file from your computer</li>
                        <li>Add a commit message describing the changes (10 characters recommended)</li>
                        <li>Click "Upload" to process the data</li>
                        <li>Verify the data appears in the dashboard</li>
                      </ol>
                    </section>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Dashboard Section */}
            <TabsContent value="dashboard">
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Guide</CardTitle>
                  <CardDescription>Understanding and using the dashboard effectively</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Dashboard Features</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Interactive time-series charts</li>
                      <li>Database selection (MongoDB, MariaDB, Atlas)</li>
                      <li>Endpoint/service filtering</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Filtering Data</h3>
                    <p className="text-muted-foreground mb-4">Use the filters at the top of the dashboard to:</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Select specific databases for comparison</li>
                      <li>Filter by service or endpoint</li>
                      <li>View global performance metrics</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Reading the Charts</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>X-axis: Changes in chronological order</li>
                      <li>Y-axis: Response time in milliseconds</li>
                      <li>Different colors represent different databases</li>
                      <li>Hover over data points for detailed information</li>
                    </ul>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* API Reference Section */}
            <TabsContent value="api">
              <Card>
                <CardHeader>
                  <CardTitle>Pseudo-API Reference</CardTitle>
                  <CardDescription>Technical details about the data storage and pseudo-API functions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Data Structure</h3>
                    <pre className="bg-muted p-4 rounded-lg text-sm">
                      {`interface Record {
  index?: number;
  name: string;
  scope: string;
  mongo: number;
  mariadb: number;
  atlas: number;
}`}
                    </pre>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Available Methods</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">addRecord(record)</h4>
                        <p className="text-muted-foreground">Adds a new performance record to the database</p>
                      </div>
                      <div>
                        <h4 className="font-medium">getRecords()</h4>
                        <p className="text-muted-foreground">Retrieves all performance records</p>
                      </div>
                      <div>
                        <h4 className="font-medium">getRecordsByScope(scope)</h4>
                        <p className="text-muted-foreground">Retrieves records filtered by scope</p>
                      </div>
                      <div>
                        <h4 className="font-medium">deleteRecords()</h4>
                        <p className="text-muted-foreground">Clears all performance records</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Storage</h3>
                    <p className="text-muted-foreground">
                      Data is stored locally using IndexedDB with the following configuration:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Database Name: "global"</li>
                      <li>Store Name: "records"</li>
                      <li>Version: 1</li>
                      <li>Auto-incrementing index field</li>
                    </ul>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contributing">
              <Card>
                <CardHeader>
                  <CardTitle>Contributing to ASS Performance Logger</CardTitle>
                  <CardDescription>Learn how to contribute to the project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">GitHub Repository</h3>
                    <p className="text-muted-foreground mb-4">
                      The project is open source and available on GitHub at:{" "}
                      <a
                        href="https://github.com/adrrf/ass-performance-logger"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        github.com/adrrf/ass-performance-logger
                      </a>
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">How to Contribute</h3>
                    <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                      <li>Fork the repository</li>
                      <li>Create a new branch for your feature</li>
                      <li>Make your changes</li>
                      <li>Submit a pull request</li>
                    </ol>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Development Setup</h3>
                    <pre className="bg-muted p-4 rounded-lg text-sm">
                      {`git clone https://github.com/adrrf/ass-performance-logger.git
cd ass-performance-logger
npm install
npm run dev`}
                    </pre>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Page>
  );
}
