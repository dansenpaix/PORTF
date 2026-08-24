/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0a0f',
          card: '#12121a',
          cardHover: '#1a1a26',
          border: '#2a2a3c',
          cyan: '#00f0ff',
          purple: '#7000ff',
          pink: '#ff007f',
          green: '#00ff66',
          yellow: '#ffcc00',
          darkBlue: '#0f172a'
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.2)',
        'neon-purple': '0 0 15px rgba(112, 0, 255, 0.4), 0 0 30px rgba(112, 0, 255, 0.2)',
        'neon-green': '0 0 15px rgba(0, 255, 102, 0.4), 0 0 30px rgba(0, 255, 102, 0.2)',
        'neon-pink': '0 0 15px rgba(255, 0, 127, 0.4), 0 0 30px rgba(255, 0, 127, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
