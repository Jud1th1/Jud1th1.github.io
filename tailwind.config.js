/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2c1244",
          accent1: "#7e61ae",
          accent2: "#353e35",
          neutral: "#dec8e2",
          dark: "#1e1e1e",
        },
        fontFamily: {
          heading: ["Raleway", "sans-serif"],
          body: ["Cormorant", "serif"],
        },
        boxShadow: {
          judith: '0 6px 12px rgba(126, 97, 174, 0.3)', // purple-y glow
        }
      },
    },
    plugins: [],
    
  }
  