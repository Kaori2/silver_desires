import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },

      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        rose:{
          950: "#3A021C",
          800: "#920637",
        }
      },

      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },

        heroFade: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        heroZoom: {
          "0%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1.05)" },
        },
      },

      animation: {
        shimmer: "shimmer 1.5s infinite",
        heroFade: "heroFade 1s ease-out forwards",
        heroZoom: "heroZoom 6s ease-out forwards",
      },
    },
  },
}

export default config
