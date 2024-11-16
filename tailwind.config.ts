import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#A8DADC',
        secondary: '#457B9D',
        accent: '#F1FAEE',
      },
    },
  },
  plugins: [],
};
