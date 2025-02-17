import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Page from "./BasicPage";
import { useNavigate } from "react-router-dom";
import { BarChart3, Upload, BookOpen, ArrowRight, Github } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Page name="">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ASS Performance Logger
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Track and analyze your ASS third project performance across different databases with powerful insights and
            visualizations
          </p>
          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              onClick={() => navigate("/ass-performance-logger/dashboard")}
              className="bg-gradient-to-r text-white from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              View Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/ass-performance-logger/docs")}
              className="border-2"
            >
              Read Documentation
            </Button>
          </div>
        </div>

        <div className="text-center mb-8">
          <a
            href="https://github.com/adrrf/ass-performance-logger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-purple-500" />
                Performance Monitoring
              </CardTitle>
              <CardDescription className="text-base">
                Real-time performance tracking across multiple databases
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              Monitor response times for MongoDB, MariaDB, and Atlas databases in a unified dashboard.
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Upload className="h-6 w-6 text-blue-500" />
                Easy Data Upload
              </CardTitle>
              <CardDescription className="text-base">Simple CSV file upload process</CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              Upload your performance data with a simple interface and keep track of your changes.
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-indigo-500" />
                Comprehensive Documentation
              </CardTitle>
              <CardDescription className="text-base">Detailed guides and references</CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              Access comprehensive documentation to help you get started and make the most of the tool.
            </CardContent>
          </Card>
        </div>

        {/* Quick Start Section */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 py-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Begin by uploading your performance data or exploring the dashboard
          </p>
          <div className="flex justify-center gap-6">
            <Button
              variant="secondary"
              onClick={() => navigate("/ass-performance-logger/data")}
              className="bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20"
            >
              Upload Data
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate("/ass-performance-logger/dashboard")}
              className="bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20"
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}
