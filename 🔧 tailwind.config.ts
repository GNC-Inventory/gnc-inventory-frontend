import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // GNC Electrical Theme Colors (from Figma analysis)
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff', 
          200: '#bfccff',
          300: '#a3b9ff',
          400: '#759cff',
          500: '#4F46E5', // Main primary from Figma
          600: '#3730a3',
          700: '#312e81',
          800: '#1e1b4b',
          900: '#0f1729', // Deep indigo background
        },
        electric: {
          blue: '#0066ff',
          green: '#00ff88',
          orange: '#ff6600',
          red: '#ff3366',
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        "scan": "scan 2s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "circuit": "circuit 3s linear infinite",
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #4F46E5, 0 0 10px #4F46E5' },
          '100%': { boxShadow: '0 0 10px #4F46E5, 0 0 20px #4F46E5' },
        },
        circuit: {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
}