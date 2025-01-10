import { lazy } from "react";

const Button = lazy(() =>
  import("@nextui-org/button").then((module) => ({ default: module.Button }))
);

export default Button;
