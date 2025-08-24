/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C85A7B',
        'primary-hover': '#FF769F',
        'primary-light': '#FFE6EE',
        gray: {
          100: '#F5F5F5',
          200: '#EEEEEE',
          800: '#111111',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'appear': 'appear 500ms ease-in forwards',
        'loading-bar': 'loading-bar 7s ease-in forwards',
        'progress': 'progress 750ms ease-out forwards',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'loading-bar': {
          '0%': { width: '0px' },
          '100%': { width: '150px' }
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' }
        }
      }
    },
  },
  plugins: [],
}