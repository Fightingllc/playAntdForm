/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      padding: {
        '4': '30px'
      }
    },
  },
  plugins: [],
}

