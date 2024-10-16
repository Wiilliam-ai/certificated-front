/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(200px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      fadeInDown: {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.2s ease-in-out',
      fadeOut: 'fadeOut 0.2s ease-in-out',
      fadeInUp: 'fadeInUp 0.3s ease-in-out',
      fadeInDown: 'fadeInDown 0.3s ease-in-out',
    },
  },
  plugins: [],
}
