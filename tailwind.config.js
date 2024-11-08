/** @type {import('tailwindcss').Config} */
/** 1a1a1a*/
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', ...defaultTheme.fontFamily.sans]

            },
            colors: {
                'dark-gray': '#1a1a1a'
            },
        },
    },
    plugins: [],
}

