import dynamic from "next/dynamic";

const Image = dynamic(() =>
  import("@heroui/image").then((module) => ({ default: module.Image })),
);

export default Image;
