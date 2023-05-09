module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      mob: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      body: ["Nunito Sans"],
    },
    fontSize: {
      xxs: ".55rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      blue: {
        light: "#ECECF4",
        ligth10: "rgba(213,218,238,0.1)",
        default60: "rgba(25, 38, 92, 0.6)",
        default50: "rgb(140 147 174)",
        default40: "rgba(25, 38, 92, 0.4)",
        default30: "#bfc1d0",
        default10: "rgb(232 234 239)",
        default07: "rgba(25, 38, 92, 0.07)",
        500: "#3a5194",
        DEFAULT: "#19265C",
      },
      white: {
        DEFAULT: "#FFFFFF",
        100: "#FAFAFA",
      },
      turquoise: {
        light: "rgba(116, 215, 244, 0.15)",
        DEFAULT: "#74D7F4",
      },
      purple: {
        DEFAULT: "#8380FF",
        default15: "rgba(131, 128, 255, 0.15)",
        default70: "rgba(131, 128, 255, 0.7)",
      },
      black: {
        DEFAULT: "#0E1724",
      },
      red: {
        DEFAULT: "#FF6666",
        default30: "rgba(255, 102, 102, 0.5)",
      },
      yellow: {
        DEFAULT: "#FFAA00",
        default25: "rgb(255, 170, 0, 0.25)",
      },
      green: {
        DEFAULT: "#228C22",
      },
      gray: {
        DEFAULT: "#808080",
        default40: "rgba(128, 128, 128, 0.4)",
      },
    },
    extend: {
      height: {
        "75-screen": "75vh",
      },
      backgroundImage: {
        sky: "url('assets/img3.png')",
      },
    },
  },
  plugins: [],
  safelist: ["text-gray", "text-yellow", "text-red", "bg-gray", "bg-red", "bg-yellow", "bg-blue"],
};
