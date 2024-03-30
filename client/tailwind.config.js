/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                // primary: "#583DEA",
                primary: "#000",
                secondary: "#F6F6F6",
                accent: "#f04939",
                light: "#FFFFFF",
                dark: "#11141D",
            },
        },
    },
    plugins: [],
};
