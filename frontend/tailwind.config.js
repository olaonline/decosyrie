/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          customGreen: {
            50: '#57A36D',
            100: '#0A7C2A',
            200: '#0A7C2A',
            300: '#0A7C2A',
            400: '#0A7C2A',
            500: '#0A7C2A',
            600: '#0A7C2A',
            700: '#00541A',
            800: '#00541A',
            900: '#062810',
          },
          customGrey: {
            50: '#fafafa',
            100: '#EDEDED',
            200: '#EDEDED',
            300: '#F4F1E4',
            400: '#F4F1E4',
            500: '#F4F1E4',
            600: '#F4F1E4',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
          },
          // Add more custom colors here
        },
      },
    },
  plugins: [],
}

