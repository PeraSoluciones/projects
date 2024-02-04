module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_00: "#ffffff00", A700: "#ffffff" },
        black: { 900: "#000000", "900_19": "#00000019" },
        teal: { 700: "#068466", 900: "#004d49" },
        light_blue: { 400: "#1daeef", A200: "#3ec3ff" },
      },
      fontFamily: { ginto: "Ginto", onegtsuperdisplay: "One GT Super Display" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#068466,#ffffff00)",
        gradient1: "linear-gradient(0deg ,#068466,#ffffff)",
      },
      boxShadow: { bs: "0px 4px  4px 0px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
