/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#FF2DAB',
                secondary: '#00F0FF',
                accent: '#FFF01F',
                background: '#F9F7F2',
                ink: '#1A1A1B',
            },
            fontFamily: {
                heading: ['Bangers', 'system-ui', 'sans-serif'],
                body: ['Outfit', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                hard: '6px 6px 0px 0px #1A1A1B',
                'hard-sm': '4px 4px 0px 0px #1A1A1B',
                'hard-lg': '8px 8px 0px 0px #1A1A1B',
                'pressed': '2px 2px 0px 0px #1A1A1B',
            },
            borderRadius: {
                'squircle': '20px',
            },
            borderWidth: {
                '3': '3px',
            },
        },
    },
    plugins: [],
};
