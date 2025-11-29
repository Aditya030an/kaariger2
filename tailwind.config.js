/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        'tablet': { 'min': '768px', 'max': '1180px' },
        ipadMini: { raw: '(min-width: 768px) and (max-width: 768px) and (min-height: 1024px)' },
        ipadAir: { raw: '(min-width: 820px) and (max-width: 820px) and (min-height: 1180px)' },
        ipadPro: { raw: '(min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px)' },
      } 
    },
  },
  plugins: [],
}