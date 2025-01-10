import { lazy } from "react";

const Avatar = lazy(() =>
  import("@nextui-org/avatar").then((module) => ({ default: module.Avatar }))
);

export default Avatar;
