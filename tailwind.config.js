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
          primary: "#2c1244",       // Deep purple
          accent1: "#7e61ae",       // Lavender purple
          accent2: "#dec8e2",       // Pale lavender/neutral
          neutral: "#f9f5f1",       // Soft cream background
          dark: "#1e1e1e",          // Charcoal
          sand: "#dbc5b0",          // Warm tan for contrast
          blush: "#f2e4e9",         // Very soft pink
          grape: "#4e306d",         // Rich supporting tone
        },
        fontFamily: {
          heading: ["Raleway", "sans-serif"],
          body: ["Cormorant", "serif"],
        },
        boxShadow: {
          judith: '0 6px 12px rgba(126, 97, 174, 0.3)',
        },
        borderRadius: {
        section: "2rem", // pill-like section dividers
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
