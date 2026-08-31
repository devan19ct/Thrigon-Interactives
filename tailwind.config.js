/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thrigon: {
          black: '#050508',
          dark: '#0a0812',
          card: '#120f20',
          'card-hover': '#1a162e',
          border: '#2a2046',
          'border-bright': '#4c3680',
          violet: '#5b21b6',
          purple: '#7c3aed',
          accent: '#9333ea',
          glow: '#a855f7',
          bright: '#c084fc',
          light: '#e9d5ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],        
        display: ['Space Grotesk', 'sans-serif'], 
      },
      screens: {
        'xs': '380px',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'beam': 'beam 8s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        beam: {
          '0%, 100%': { opacity: 0.2, transform: 'rotate(-5deg)' },
          '50%': { opacity: 0.5, transform: 'rotate(5deg)' },
        }
      }
    },
  },
  plugins: [],
}

