/** @type {import('tailwindcss').Config} */
export const content = [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        colors: {
            cyan: {
                400: '#22d3ee',
                500: '#06b6d4',
                950: '#083344',
            },
            slate: {
                950: '#020617', // Fondo muy oscuro
            }
        },
        animation: {
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'scan': 'scan 3s linear infinite',
        },
        keyframes: {
            scan: {
                '0%': { top: '0%', opacity: '0' },
                '50%': { opacity: '1' },
                '100%': { top: '100%', opacity: '0' },
            }
        }
    },
};
export const plugins = [];