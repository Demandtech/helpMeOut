import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  innerfill?: string;
  size?: number;
};

export type Video = {
  title: string;
  date: string;
  img: string;
};

export type VideoList = Video[];
