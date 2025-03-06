import dynamic from "next/dynamic";

const Input = dynamic(() =>
  import("@heroui/input").then((module) => ({ default: module.Input })),
);

export default Input;
