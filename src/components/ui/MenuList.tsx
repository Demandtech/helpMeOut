import dynamic from "next/dynamic";

export const Listbox = dynamic(() =>
  import("@heroui/listbox").then((module) => ({ default: module.Listbox })),
);

export const ListboxItem = dynamic(() =>
  import("@heroui/listbox").then((module) => ({
    default: module.ListboxItem,
  })),
);
