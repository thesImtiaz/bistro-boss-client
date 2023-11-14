/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@designbycode/tailwindcss-text-shadow")
    ({
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowBlur: "0px",
      shadowOffsetX: "2px",
      shadowOffsetY: "2px",
    }),
  ],
};
