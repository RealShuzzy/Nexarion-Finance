/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "index.html"
    ],
    theme:{
        extend: {
            colors: {
                'primary': 'rgb(var(--color-primary) / <alpha-value>)',
                'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',

                'background-dark': 'rgb(var(--color-background-dark) / <alpha-value>)',
                'background': 'rgb(var(--color-background) / <alpha-value>)',

                'border': 'rgb(var(--color-border) / <alpha-value>)',
            },
        },
    },
    plugins: [],
      };