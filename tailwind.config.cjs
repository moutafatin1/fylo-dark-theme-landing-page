/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        introBg: "hsl(217, 28%, 15%)",
        mainBg: "hsl(218, 28%, 13%)",
        footerBg: "hsl(216, 53%, 9%)",
        testimonialsBg: "hsl(219, 30%, 18%)",
        ctaGradientFrom: "hsl(176, 68%, 64%)",
        ctaGradientTo: "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
