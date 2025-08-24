/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-hover': '#1d4ed8',
        'primary-light': '#dbeafe',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
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