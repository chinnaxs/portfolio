/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#161d26",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "deep-blue": "#090c12",
      black: "#000205",
      white: "#e3ddd1",
    },
    borderRadius: {
      s: "0.75rem",
      "4xl": "2rem",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      ubuntu: ['Ubuntu Mono', "monospace"]
    },
  },
  // theme: {
  //   screens: {
  //     sm: '480px',
  //     md: '768px',
  //     lg: '976px',
  //     xl: '1440px',
  //   },
  //   colors: {
  //     'blue': '#1fb6ff',
  //     'purple': '#7e5bef',
  //     'pink': '#ff49db',
  //     'orange': '#ff7849',
  //     'green': '#13ce66',
  //     'yellow': '#ffc82c',
  //     'gray-dark': '#161d26',
  //     'gray': '#8492a6',
  //     'gray-light': '#d3dce6',
  //     'deep-blue': '#090812'
  //   },
  //   fontFamily: {
  //     sans: ['Graphik', 'sans-serif'],
  //     serif: ['Merriweather', 'serif'],
  //   },
  //   extend: {
  //     spacing: {
  //       '128': '32rem',
  //       '144': '36rem',
  //     },
  //     borderRadius: {
  //       '4xl': '2rem',
  //     }
  //   }
  // },
  plugins: [],
};
