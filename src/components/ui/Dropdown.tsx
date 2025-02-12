"use client";

import { ReactNode } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

interface DropdownItemType {
  key: string;
  label: string;
}

interface AppProps {
  triggerContent: ReactNode;
  items: DropdownItemType[];
  onSelect: (key: string) => void; // Function to handle selection dynamically
}

export default function App({ triggerContent, items, onSelect }: AppProps) {

  return (
    <Dropdown radius="sm">
      <DropdownTrigger>{triggerContent}</DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            className={item.key === "delete" ? "text-danger" : ""}
            color={item.key === "delete" ? "danger" : "default"}
            onPress={() => onSelect(item.key)}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
