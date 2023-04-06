/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: { raleway: ["raleway", "sans-serif"] },
      colors: {
        amarillo: "#FFAB05",
        naranja: "#FF8710",
        rosado: "#D3006E",
        morado: "#9C2880",
        verde: "#018875",
        celeste: "#00B4AF",
        negro: "#303030",
      },
    },
  },
  plugins: [],
};
