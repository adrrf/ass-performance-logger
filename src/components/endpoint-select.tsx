import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface EndpointSelectProps {
  options: { services: string[]; endpoints: string[] }[];
  selected: string;
  onChange: (selected: string) => void;
  placeholder?: string;
  className?: string;
}

export function EndpointSelect({ options, selected, onChange, placeholder, className }: EndpointSelectProps) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {selected || placeholder || "Select scope..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search scope..." />
          <CommandList>
            <CommandEmpty>No endpoint found.</CommandEmpty>
            <CommandGroup key={options.services.join(",")} heading="Services">
              {options.services.map((service) => (
                <CommandItem
                  key={service}
                  onSelect={() => {
                    onChange(service === selected ? "" : service);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", selected === service ? "opacity-100" : "opacity-0")} />
                  {service}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup key={options.endpoints.join(",")} heading="Endpoints">
              {options.endpoints.map((endpoint) => (
                <CommandItem
                  key={endpoint}
                  onSelect={() => {
                    onChange(endpoint === selected ? "" : endpoint);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", selected === endpoint ? "opacity-100" : "opacity-0")} />
                  {endpoint}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
