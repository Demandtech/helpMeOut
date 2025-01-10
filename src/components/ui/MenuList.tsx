"use client";

import { lazy } from "react";

export const Listbox = lazy(() =>
  import("@nextui-org/listbox").then((module) => ({ default: module.Listbox }))
);

export const ListboxItem = lazy(() =>
  import("@nextui-org/listbox").then((module) => ({
    default: module.ListboxItem,
  }))
);
