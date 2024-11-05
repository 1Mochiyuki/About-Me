/** @type {import('tailwindcss').Config} */
/** 1a1a1a*/
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            fontFamily: {
                terminalFont: ["DotGothic16", "sans-serif"]

            },
            colors: {
                'dark-gray': '#1a1a1a'
            },
        },
    },
    plugins: [],
}

