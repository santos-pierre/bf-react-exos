const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                // title: ['Amatic SC', 'cursive', ...defaultTheme.fontFamily.sans],
                body: ['Electrolize', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                react: '#61dbfb',
            },
        },
    },
    plugins: [],
};
