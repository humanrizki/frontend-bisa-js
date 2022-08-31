/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/components/*.js',
    './src/components/**/*.{js, jsx}',
    './src/components/**/**/*.{js, jsx}',
    './src/components/**/**/**/*.{js, jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
