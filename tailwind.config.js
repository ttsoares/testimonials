/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    sm: "375px",
    md: "960px",
    lg: "1440px",
  },
  theme: {
    extend: {
      colors: {
        modViolet: "hsl(263, 55%, 52%)",
        vd_g_blue: "hsl(217, 19%, 35%)",
        vd_b_blue: "hsl(219, 29%, 14%)",
        lightGray: "hsl(0, 0%, 81%)",
        light_g_blue: "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
