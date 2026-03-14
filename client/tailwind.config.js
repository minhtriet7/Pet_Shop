/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316', // Màu cam chủ đạo cho Pet Shop
        secondary: '#14B8A6', // Màu xanh ngọc cho dịch vụ Spa
      }
    },
  },
  plugins: [],
}