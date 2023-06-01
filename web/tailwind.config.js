/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
        alt: "var(--font-bai-jamjuree)",
      },
      colors: {
        gray: {
          50: "#eaeaea",
          100: "#bebebf",
          200: "#9e9ea0",
          300: "#727275",
          400: "#56565a",
          500: "#2c2c31",
          600: "#28282d",
          700: "#1f1f23",
          800: "#18181b",
          900: "#121215",
        },
        mainPalette: {
          text: "#f3edfd",
          bg: "#121215",
          primaryButton: '#74c313',
          secondaryButton: '#07010e',
          extra: '#253514',
          accent: '#4D7C14',
        },
        previewPalette0: {
          text: "#e1ebf5",
          bg: "#050a0f",
          primaryButton: '#274e2e',
          secondaryButton: '#e0f0e3',
          extra: '#192A22',
          accent: '#305f38',
        },
        previewPalette1: {
          text: "#14171f",
          bg: "#f2f4f7",
          primaryButton: '#d6cebd',
          secondaryButton: '#e9ecf1',
          extra: '#DDD8CC',
          accent: '#E2E1DE',
        }
      },
      blur: {
        full: "194px",
      },
    },
    plugins: [],
  },
};
