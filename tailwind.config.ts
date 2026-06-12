import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Terminal — dark / developer palette */
        bg: "#070B14",
        "bg-2": "#0A1020",
        panel: "#0C1526",
        "panel-2": "#0E1A30",
        line: "#18243F",
        "line-2": "#213253",
        text: "#D8E3F4",
        dim: "#94A6C4",
        faint: "#5E7194",
        blue: "#5EA0FF",
        "blue-deep": "#2F6BFF",
        green: "#2EE6A6",
        "green-dim": "#1E9E76",
        amber: "#FFB547",
        red: "#FF6B6B",
      },
      fontFamily: {
        sans: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
