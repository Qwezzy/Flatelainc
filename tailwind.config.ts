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
        cream: { DEFAULT: "#F5F1E8", soft: "#EFEAD8", paper: "#FBF8F0" },
        forest: { deep: "#1F2817", mid: "#3A4A2A", leaf: "#6B8246", pale: "#B8C49A" },
        earth: { deep: "#2A1F12", trunk: "#4A3520", warm: "#6B4E2E" },
        bronze: { DEFAULT: "#B8941F", light: "#D4B458", dark: "#8C6E14" },
        ink: { DEFAULT: "#1A1A14", soft: "#4A453A", mute: "#7A7468" },
        rule: "#D4CDB8",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["44px", { lineHeight: "1.05" }],
        "display-lg": ["36px", { lineHeight: "1.1" }],
        "display-md": ["28px", { lineHeight: "1.15" }],
        "body-lg": ["18px", { lineHeight: "1.5" }],
        body: ["16px", { lineHeight: "1.6" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
        eyebrow: ["12px", { lineHeight: "1.3" }],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 24px 48px -24px rgba(31,40,23,0.18)",
        "card-lg": "0 32px 64px -24px rgba(31,40,23,0.24)",
      },
      borderRadius: {
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
