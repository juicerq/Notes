/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '370px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        alt: 'var(--font-roboto)',
        main: 'var(--font-main)',
      },
      blur: {
        full: '194px',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        mainPalette: {
          text: '#2c2c2c',
          bg: '#eee',
          bgAlt: '#252525',
          primaryButton: '#74c313',
          secondaryButton: '#07010e',
          extra: '#375514',
          accent: '#6BB214',
          fadedBlack: 'rgba(0, 0, 0, 0.55)',
        },
        demoPalette: {
          text: 'var(--text)',
          bg: 'var(--bg)',
          bgAlt: 'var(--bgAlt)',
          primaryButton: 'var(--primaryButton)',
          secondaryButton: 'var(--secondaryButton)',
          extra: 'var(--extra)',
          accent: 'var(--accent)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
