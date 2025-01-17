/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #1E1E2F, #0F0F1F)',
        'input-gradient': 'linear-gradient(90deg, rgba(69, 88, 143, 0.8) 0%, rgba(48, 59, 97, 0.8) 50.5%, rgba(39, 42, 73, 0.8) 100%)',
        'button-gradient': 'linear-gradient(84.11deg, #2D58BD 0%, #3A78D0 55.19%, #1892F5 110.37%)',
      },
    },
  },
  plugins: [],
};
