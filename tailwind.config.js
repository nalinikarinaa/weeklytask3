/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}', // File dalam folder src
    './*.html', // Tambahkan jalur file HTML di luar folder src
  ],
  theme: {
    extend: {
      colors : {
        "hitam": '#242426',
    },
    fontFamily: {
      'mona': ['Mona Sans', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
    },
    },
  },
  plugins: [],
}