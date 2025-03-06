import { lazy } from "react";

const Tooltip = lazy(() =>
  import("@heroui/tooltip").then((module) => ({ default: module.Tooltip })),
);

export default Tooltip;
