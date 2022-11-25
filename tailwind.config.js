/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bright-blue": "hsl(220, 98%, 61%)",

        // Light Theme
        "light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",

        // Dark Theme
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "dark-grayish-blue-2": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue-2": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-3": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
