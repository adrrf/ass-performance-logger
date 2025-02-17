import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface EndpointSelectProps {
  options: { section: string; items: string[] }[];
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
            {options.map((section) => (
              <CommandGroup key={section.section} heading={section.section}>
                {section.items.map((option) => (
                  <CommandItem
                    key={option}
                    onSelect={() => {
                      onChange(option === selected ? "" : option);
                      setOpen(false);
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", selected === option ? "opacity-100" : "opacity-0")} />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
