/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero_background.jpg')",
      },
    },
  },
  plugins: [],
};
