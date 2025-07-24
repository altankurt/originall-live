/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'drop-fall': 'drop-fall 2s ease-in-out',
        'ripple-1': 'ripple-1 1.5s ease-out 2s',
        'ripple-2': 'ripple-2 2s ease-out 2.2s',
        'ripple-3': 'ripple-3 2.5s ease-out 2.4s',
        'water-fill': 'water-fill 1s ease-out 1.8s',
      },
      keyframes: {
        'drop-fall': {
          '0%': {
            transform: 'translateX(-50%) translateY(-20px)',
            opacity: '1',
          },
          '70%': {
            transform: 'translateX(-50%) translateY(80px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(90px)',
            opacity: '0',
          },
        },
        'ripple-1': {
          '0%': {
            transform: 'translateX(-50%) scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-50%) scale(1)',
            opacity: '0',
          },
        },
        'ripple-2': {
          '0%': {
            transform: 'translateX(-50%) scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-50%) scale(1)',
            opacity: '0',
          },
        },
        'ripple-3': {
          '0%': {
            transform: 'translateX(-50%) scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-50%) scale(1)',
            opacity: '0',
          },
        },
        'water-fill': {
          '0%': {
            transform: 'scaleY(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scaleY(1)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}