/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "index.html"
    ],
    darkMode: 'class',
    theme:{
        extend: {
            colors: {
                'primary': 'rgb(var(--color-primary) / <alpha-value>)',
                'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
                
                'gray-1': 'rgb(var(--color-gray-1) / <alpha-value>)',
                'gray-2': 'rgb(var(--color-gray-2) / <alpha-value>)',
                'gray-3': 'rgb(var(--color-gray-3) / <alpha-value>)',
                'gray-4': 'rgb(var(--color-gray-4) / <alpha-value>)',
                'gray-5': 'rgb(var(--color-gray-5) / <alpha-value>)',
                'gray-6': 'rgb(var(--color-gray-6) / <alpha-value>)',
                'gray-7': 'rgb(var(--color-gray-7) / <alpha-value>)',
                'gray-8': 'rgb(var(--color-gray-8) / <alpha-value>)',
                'gray-9': 'rgb(var(--color-gray-9) / <alpha-value>)',
                'gray-10': 'rgb(var(--color-gray-10) / <alpha-value>)',

                'hover-l': 'rgb(var(--color-hover-l) / 0.1)',
                'hover-d': 'rgb(var(--color-hover-d) / 0.1)',
                

                'field-dark': 'rgb(var(--color-field-dark) / <alpha-value>)',

                'text-gray': 'rgb(var(--color-text-gray) / <alpha-value>)',
            },
        },
    },
    plugins: [],
      };