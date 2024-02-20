/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
      backgroundImage: {
        sidebar: "url('./assets/images/SidebarBackground.svg')",
      },
      boxShadow: {
        sidebar: "5px 0px 10px #00000040",
      },
      colors: {
        "body-background": "#F5F5F5",
        "global-grey": "#DDDDDD",
        "sidebar-grey": "#333333",
        "chart-purple": "#8F71DD",
        "chart-orange": "#DD6844",
        "chart-yellow": "#DDDC61",
        "chart-green": "#35DDB3",
        "chart-blue": "#1A8DDD",
        "sidebar-subheading": "#FFFFFF59",
        "global-white": "#FFFFFF",
        "donut-denominator": "#999999",
        "donut-vinculum": "#666666",
        "donut-orange": "#F68B15",
        "sidebar-active": "#FFFFFF1A",
      },
    },
  },
  plugins: [],
};
