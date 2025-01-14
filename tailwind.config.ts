import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|image|input|listbox|ripple|spinner|form|divider).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: `var(--primary)`,
        secondary: `var(--secondary)`,
        black: `var(--black)`,
        white: `var(--white)`,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        work: ["Work sans", "sans-serif"],
      },
      // backgroundImage: {
      //   "hero-top": "url('/public/assets/home/hero-bg-top.png')",
      //   "footer-texture": "url('/public/images/footer-texture.png')",
      // },
    },
  },
  plugins: [nextui()],
} satisfies Config;
