"use client";

import { ReactNode } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function App({
  triggerContent,
  items,
}: {
  triggerContent: ReactNode;
  items: { key: string; label: string }[];
}) {
  const handleSelectOption = (key: string) => {
    if (!key) return;

    switch (key) {
      case "view":
        break;
      default:
        break;
    }
  };
  return (
    <Dropdown radius="sm">
      <DropdownTrigger>{triggerContent}</DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            className={item.key === "delete" ? "text-danger" : ""}
            color={item.key === "delete" ? "danger" : "default"}
            onPress={() => handleSelectOption(item.key)}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
