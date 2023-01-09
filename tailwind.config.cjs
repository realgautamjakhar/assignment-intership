/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#8D72E1",
        black: "#181D31",
      },
      backgroundImage: {
        accentGD: "linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)",
        whiteGD: "linear-gradient(to top, #dfe9f3 0%, white 100%);",
        blackGD:
          "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
      },
      boxShadow: {
        neu: "7px 7px 14px #e8e8e8,-7px -7px 14px #ffffff",
        accent: "0px 29px 39px -19px rgba(	206, 159, 252,1)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
