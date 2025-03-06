import dynamic from "next/dynamic";

const Button = dynamic(() =>
  import("@heroui/button").then((module) => ({ default: module.Button })),
);

export default Button;
