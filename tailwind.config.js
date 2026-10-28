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
        dark: {
          bg: '#10111B',
          surface: '#171827',
          card: '#1F2035',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#F5F5FA',
          muted: '#A1A1B5',
        },
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          card: '#F1F5F9',
          border: 'rgba(0, 0, 0, 0.08)',
          text: '#0F172A',
          muted: '#64748B',
        },
        accent: {
          purple: '#8B5CF6',
          cyan: '#22D3EE',
          'purple-glow': 'rgba(139, 92, 246, 0.25)',
          'cyan-glow': 'rgba(34, 211, 238, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
