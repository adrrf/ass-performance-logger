import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Outlet } from "react-router";

export default function Page(props: { name: string }) {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          {props.name === "" ? (
            <SidebarTrigger className="-ml-1" />
          ) : (
            <>
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <BreadcrumbItem>
                <span> {props.name} </span>
              </BreadcrumbItem>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
}
