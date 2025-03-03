import * as React from "react";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const [activeTeam] = React.useState(teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            size="lg"
            className="bg-purple-700 text-sidebar-primary-foreground hover:bg-purple-700 active:bg-purple-700 focus:bg-purple-700"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-purple-700 text-sidebar-primary-foreground">
              <activeTeam.logo className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{activeTeam.name}</span>
              <span className="truncate text-xs">{activeTeam.plan}</span>
            </div>
          </SidebarMenuButton>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
