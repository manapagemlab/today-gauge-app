import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", "Hiragino Sans", "Meiryo", "system-ui", "sans-serif"]
      },
      colors: {
        app: {
          background: "#FFFDF8",
          text: "#2F3440",
          muted: "#6B7280",
          border: "#E5E7EB",
          empty: "#E8ECF3",
          primary: "#6D8BFF",
          primarySoft: "#EEF2FF",
          primarySoftText: "#4F46E5"
        }
      },
      boxShadow: {
        soft: "0 4px 16px rgba(0, 0, 0, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
