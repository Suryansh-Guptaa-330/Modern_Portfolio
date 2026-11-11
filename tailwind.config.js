/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#080d1a',
        cardBg: '#0f172a',
        cardBorder: '#1e293b',
        accentCyan: '#06b6d4',
        accentIndigo: '#6366f1',
      },
    },
  },
  plugins: [],
}
