/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: "1.5rem", // Modify the font size for text-xl
        lg: "1rem",
      },
      borderWidth: {
        22: "22px",
      },
      width: {
        70: "70%",
      },
    },
  },
  plugins: [],
};
