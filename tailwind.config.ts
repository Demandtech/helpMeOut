import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|dropdown|image|input|listbox|ripple|spinner|menu|divider|popover|form).js"
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
      
    },
  },
  plugins: [nextui()],
} satisfies Config;
