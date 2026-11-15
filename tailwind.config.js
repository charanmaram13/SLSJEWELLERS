/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          950: '#1C120C',
          900: '#23160F',
          DEFAULT: '#2B1D15',
          800: '#3A281D',
          700: '#4D3627',
          600: '#644734'
        },
        gold: {
          light: '#F5E7CC',
          champagne: '#DCC28F',
          DEFAULT: '#C9A062',
          warm: '#C9A062',
          dark: '#A67C3E',
          deep: '#7E5B26'
        },
        ivory: {
          DEFAULT: '#F6EFE1',
          light: '#FBF8F3',
          dark: '#E7DEC9'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #DCC28F 0%, #C9A062 50%, #A67C3E 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(220,194,143,0.2) 0%, rgba(43,29,21,0) 70%)',
        'luxury-dark': 'linear-gradient(180deg, #2B1D15 0%, #1C120C 100%)',
        'dark-overlay': 'linear-gradient(to top, rgba(35, 22, 15, 0.95) 0%, rgba(43, 29, 21, 0.4) 60%, rgba(43, 29, 21, 0.2) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
