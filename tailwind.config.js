/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors from logo
        brand: {
          primary: '#2D4A4B',
          secondary: '#3A5F61',
          accent: '#4F7275',
          light: '#E8F4F8',
          dark: '#1A2F30',
        },
        // Glassmorphism colors
        glass: {
          white: 'rgba(255, 255, 255, 0.25)',
          dark: 'rgba(45, 74, 75, 0.15)',
          border: 'rgba(255, 255, 255, 0.18)',
          'white-10': 'rgba(255, 255, 255, 0.1)',
          'white-15': 'rgba(255, 255, 255, 0.15)',
          'white-20': 'rgba(255, 255, 255, 0.2)',
          'dark-10': 'rgba(17, 24, 39, 0.1)',
          'dark-15': 'rgba(17, 24, 39, 0.15)',
          'dark-20': 'rgba(17, 24, 39, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(45, 74, 75, 0.05) 0%, rgba(79, 114, 117, 0.05) 100%)',
        'text-gradient': 'linear-gradient(135deg, #2D4A4B 0%, #4F7275 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
        '5xl': '96px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'dock': '0 20px 40px -12px rgba(0, 0, 0, 0.25), 0 8px 16px -4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'dock-scrolled': '0 12px 24px -8px rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'liquid': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'liquid-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'dock-bounce': 'dockBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(45, 74, 75, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(45, 74, 75, 0.4)' },
        },
        dockBounce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}