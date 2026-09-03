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
        brown: { DEFAULT: "#533E2B" },
        green: { DEFAULT: "#657D4F" },
        moss: { DEFAULT: "#857D4E", light: "#A39A68", dark: "#6B6440", pale: "#B5B39A" },
        cream: { DEFAULT: "#F3F0E6", soft: "#E8E4D6", paper: "#F8F6EE" },
        earth: { deep: "#3A2B1E", trunk: "#533E2B", warm: "#6B5340" },
        ink: { DEFAULT: "#2A2218", soft: "#533E2B", mute: "#7A7268" },
        rule: "#D9D3C4",
      },
      fontFamily: {
        "serif-display": ["var(--font-serif)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
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
        card: "0 24px 48px -24px rgba(83,62,43,0.18)",
        "card-lg": "0 32px 64px -24px rgba(83,62,43,0.24)",
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
