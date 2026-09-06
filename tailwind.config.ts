import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#10151C",
          soft: "#171F29",
          line: "#2A3541",
        },
        paper: {
          DEFAULT: "#F4F6F5",
          dim: "#E9ECEA",
        },
        teal: {
          DEFAULT: "#2F8F86",
          bright: "#3DAA9F",
          deep: "#1E5F59",
        },
        copper: {
          DEFAULT: "#B87A3D",
          bright: "#D3924F",
        },
        ink50: "rgba(16,21,28,0.5)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
} satisfies Config;
