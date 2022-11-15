/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      verysmall: { max: "600px" },
      small: { max: "868px" },
      medium: { max: "1000px" },
    },
  },
  plugins: [],
};
