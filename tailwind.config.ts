import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rosa-claro": "#F8B6B0",
        "rosa-suave": "#FAD0CB",
        "marrom-escuro": "#4A2E1F",
        "marrom-medio": "#6B4A3A",
        "off-white": "#F6F1EB",
        "rosa-destaque": "#E96C6C",
        "azul-escuro": "#1e3a5f",
        "azul-medio": "#2c4a6f",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
