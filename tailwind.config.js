module.exports = {
  // prefix: 'tailwind-', // all style should put 'tailwind-' before style name
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff',
        gray: {
          100: '#f7fafc', // text-gray-100, border-gray-100, bg-gray-100
          400: '#cbd5e0',
          700: '#4a5568',
          900: '#1a202c',
        }
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover']
    },
  },
  plugins: [],
}
