/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#FAF9F8",
        "secondary-light": "#F1F1F1",
        "secondary-dark": "#DBDBDB",
        buttons: "#8E9A82",
      },
      maxWidth: { container: "1700px" },
      fontSize: {
        "3xl": ["2rem", "2.25rem"],
      },
    },
    screens: {
      md: "640px",
      lg: "993px",
      xl: "1280px",
      "2xl": "1367px",
    },
  },
  plugins: [],
};
