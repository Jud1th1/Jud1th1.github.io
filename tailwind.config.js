/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    /** @type {import('tailwindcss').Config} */

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
          judith: '0 6px 12px rgba(126, 97, 174, 0.3)',
        },
        keyframes: {
          pulseDot: {
            '0%, 100%': { transform: 'scale(1)', opacity: '1' },
            '50%': { transform: 'scale(1.4)', opacity: '0.5' },
          },
          scrollPulse: {
            '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
            '50%': { transform: 'translateY(10px)', opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          pulseDot: 'pulseDot 1.5s ease-in-out infinite',
          scrollPulse: 'scrollPulse 1.5s ease-in-out infinite',
          fadeInUp: 'fadeInUp 1s ease-out forwards',
        },
      },
    },
    
  plugins: [],
}
