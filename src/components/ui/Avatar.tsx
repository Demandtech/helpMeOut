import { lazy } from "react";

const Avatar = lazy(() =>
  import("@heroui/avatar").then((module) => ({ default: module.Avatar })),
);

export default Avatar;
