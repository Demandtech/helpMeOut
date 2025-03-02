import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|dropdown|image|input|listbox|ripple|spinner|menu|divider|popover|form).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: `var(--primary-500)`,
        "primary-50": `var(--primary-50)`,
        "primary-100": `var(--primary-100)`,
        "primary-200": `var(--primary-200)`,
        "primary-300": `var(--primary-300)`,
        "primary-400": `var(--primary-400)`,
        "primary-600": `var(--primary-600)`,
        "primary-700": `var(--primary-700)`,
        "primary-800": `var(--primary-800)`,
        "primary-900": `var(--primary-900)`,
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
