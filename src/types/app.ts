import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  innerfill?: string;
  size?: number;
};
