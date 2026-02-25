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
                // Extended palette
                'primary-dark': '#D91A8F',
                'secondary-dark': '#00C4CC',
                'accent-dark': '#E6D600',
                cream: '#FFF8E7',
                blush: '#FFE4EC',
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
                // Glow shadows
                'glow-primary': '0 0 30px rgba(255, 45, 171, 0.4)',
                'glow-secondary': '0 0 30px rgba(0, 240, 255, 0.4)',
                'glow-accent': '0 0 30px rgba(255, 240, 31, 0.4)',
            },
            borderRadius: {
                'squircle': '20px',
            },
            borderWidth: {
                '3': '3px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pop-in': 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'wobble': 'wobble 0.5s ease-in-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(3deg)' },
                },
                popIn: {
                    '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                },
                wobble: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '15%': { transform: 'rotate(-5deg)' },
                    '30%': { transform: 'rotate(4deg)' },
                    '45%': { transform: 'rotate(-3deg)' },
                    '60%': { transform: 'rotate(2deg)' },
                    '75%': { transform: 'rotate(-1deg)' },
                },
            },
        },
    },
    plugins: [],
};
