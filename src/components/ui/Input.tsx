import dynamic from "next/dynamic";

const Input = dynamic(() =>
  import("@nextui-org/input").then((module) => ({ default: module.Input }))
);

export default Input;
