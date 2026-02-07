import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                coral: {
                    50: 'oklch(0.97 0.015 40)',
                    100: 'oklch(0.95 0.03 40)',
                    200: 'oklch(0.90 0.06 38)',
                    300: 'oklch(0.82 0.12 36)',
                    400: 'oklch(0.72 0.18 34)',
                    500: 'oklch(0.65 0.20 35)',
                    600: 'oklch(0.55 0.18 33)',
                    700: 'oklch(0.45 0.16 32)',
                    800: 'oklch(0.38 0.14 30)',
                    900: 'oklch(0.32 0.12 28)',
                    950: 'oklch(0.22 0.10 26)',
                },
                peach: {
                    50: 'oklch(0.97 0.015 50)',
                    100: 'oklch(0.95 0.03 50)',
                    200: 'oklch(0.90 0.06 48)',
                    300: 'oklch(0.82 0.12 46)',
                    400: 'oklch(0.72 0.16 44)',
                    500: 'oklch(0.65 0.18 42)',
                    600: 'oklch(0.55 0.16 40)',
                    700: 'oklch(0.45 0.14 38)',
                    800: 'oklch(0.38 0.12 36)',
                    900: 'oklch(0.32 0.10 34)',
                    950: 'oklch(0.22 0.08 32)',
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)'
            },
            fontFamily: {
                sans: [
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'sans-serif'
                ],
                display: [
                    '"Georgia"',
                    '"Times New Roman"',
                    'serif'
                ]
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
