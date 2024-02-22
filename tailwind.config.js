/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/Pages/Contactus/**/*.{js,jsx,ts,tsx}",
    "./src/Pages/Contactus/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/Components/Text/index.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


module.exports = {
  mode: "jit",
  content: [
    "./src/Pages/Contactus/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/Pages/Contactus/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/Components/Text/index.jsx"
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#f0f0f0",
          300: "#e0e0e0",
          600: "#707070",
          900: "#011c2a",
          "300_01": "#e6e6e6",
          "200_01": "#ebebeb",
        },
        blue: { 900: "#012bb4" },
        red: { 300: "#e4897b", 400: "#de5753", 700: "#c53f3f" },
        blue_gray: { 400: "#8d8d8d", 900: "#263238" },
        white: { A700_1e: "#ffffff1e", A700_21: "#ffffff21", A700: "#ffffff" },
        black: { 900: "#000000", "900_1e": "#0000001e", "900_07": "#00000007" },
      },
      fontFamily: { poppins: "Poppins" },
      boxShadow: {
        bs1: "0px 0px  14px 0px #0000001e",
        bs: "0px 0px  60px 0px #00000007",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
