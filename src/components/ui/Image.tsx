import dynamic from "next/dynamic";

const Image = dynamic(() =>
  import("@nextui-org/image").then((module) => ({ default: module.Image }))
);

export default Image;
