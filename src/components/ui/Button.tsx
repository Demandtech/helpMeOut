import dynamic from "next/dynamic";

const Button = dynamic(() =>
  import("@nextui-org/button").then((module) => ({ default: module.Button })),
);

export default Button;
