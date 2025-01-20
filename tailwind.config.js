/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto bold"],
        body: ["Cabin Regular"],
      },
      colors: {
        bgPrime: "#303841",
        bgSecondary: "#3A4750",
        neon: "#E1FF00",
        light: "#EEE",
        innova: "#7E1416",
      },
    },
  },
  plugins: [],
};
