/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                // Define a custom shadow utility named 'shadow-xs'
                'xs': '0 1px 2px 0 rgba(10, 13, 18, 0.05), inset 0 -2px 0 0 rgba(0, 0, 0, 0)',
                // Note: The inner shadow color/opacity is often implied or very subtle.
                // I used a placeholder 0 for the inner shadow's color since it's missing in the image.
            },
        },
    },
    plugins: [],
};