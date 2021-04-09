module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Presentationals/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "main-text": ["Roboto Slab", "serif"],
        "main-menu": ["Raleway", "sans-serif"],
      },
      spacing: {
        98: "46rem",
      },
      width: {
        "746px": "746px",
      },
      fontSize: {
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
          deep: "#23408e",
          medium: "#385399",
          text: "#cccccc",
        },
        green: {
          pastel: "#346032",
        },
        gray: {
          behind: "#f5f5f7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
