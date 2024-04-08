/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Valkids: ["Valkids", "sans-serif"],
        Lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
