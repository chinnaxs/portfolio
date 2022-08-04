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
      gray: "#717C9C",
      "gray-light": "#DBDEE6",
      "deep-blue": "#090c12",
      black: "#000205",
      white: "#e3ddd1",
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      monospace: ['Ubuntu Mono', "monospace"]
    },
    fontSize: {
      sm: ['16px', '24px'],
      base: ['20px', '28px'],
      lg: ['24px', '32px'],
      xl: ['28px', '36px'],
      "2xl": ['32px', '40px'],
      "3xl": ['36px', '44px'],
      "4xl": ['40px', '48px'],
      "5xl": ['44px', '52px']
    }
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
