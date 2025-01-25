"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { ReactNode } from "react";

export default function App({
  triggerContent,
  items,
}: {
  triggerContent: ReactNode;
  items: { key: string; label: string }[];
}) {
  return (
    <Dropdown radius="sm">
      <DropdownTrigger>{triggerContent}</DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            className={item.key === "delete" ? "text-danger" : ""}
            color={item.key === "delete" ? "danger" : "default"}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
