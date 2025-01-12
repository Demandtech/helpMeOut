import dynamic from "next/dynamic";

export const Listbox = dynamic(() =>
  import("@nextui-org/listbox").then((module) => ({ default: module.Listbox })),
);

export const ListboxItem = dynamic(() =>
  import("@nextui-org/listbox").then((module) => ({
    default: module.ListboxItem,
  })),
);
