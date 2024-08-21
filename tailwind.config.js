/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'League Spartan': ['League Spartan', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular', ],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Titillium Web': ['Titillium Web', 'sans-serif'],
        'Quattrocento Sans': ["Quattrocento Sans","sans-serif"],
      },
    },
    
  },
  plugins: [
  ],
}