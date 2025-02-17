import * as React from "react";
import { BookOpen, Home, Rocket, SquareTerminal, Upload } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

const data = {
  teams: [
    {
      name: "ASS Performance Logger",
      logo: Rocket,
      plan: "2025",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/ass-performance-logger/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Dashboard",
      url: "/ass-performance-logger/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Upload data",
      url: "/ass-performance-logger/data",
      icon: Upload,
    },
    {
      title: "Documentation",
      url: "/ass-performance-logger/docs",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
