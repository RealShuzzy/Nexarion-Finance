/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "index.html"
    ],
    theme:{
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                nexarion_dark: {
                    "primary": "oklch(60% 0.126 221.723)",
                    "primary-content": "oklch(100% 0 0)",
                    "secondary": "oklch(60% 0.126 221.723)",
                    "secondary-content": "oklch(100% 0 0)",
                    "accent": "oklch(60% 0.126 221.723)",
                    "accent-content": "oklch(100% 0 0)",
                    "neutral": "rgb(50,50,50)",
                    "neutral-content": "oklch(100% 0 0)",
                    "base-100": "rgb(18,18,18)",
                    "base-200": "rgb(25,25,25)",
                    "base-300": "rgb(50,50,50)",
                    "base-content": "oklch(100% 0 0)",
                    "info": "oklch(60% 0.126 221.723)",
                    "info-content": "oklch(100% 0 0)",
                    "success": "oklch(79% 0.209 151.711)",
                    "success-content": "oklch(0% 0 0)",
                    "warning": "oklch(82% 0.189 84.429)",
                    "warning-content": "oklch(0% 0 0)",
                    "error": "oklch(70% 0.191 22.216)",
                    "error-content": "oklch(0% 0 0)",
                },
            },
            "dark",
            "light"
          ],
        },
      };