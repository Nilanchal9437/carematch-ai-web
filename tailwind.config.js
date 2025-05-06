/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        dot1: {
          '0%, 20%': { opacity: '0' },
          '40%, 100%': { opacity: '1' }
        },
        dot2: {
          '0%, 40%': { opacity: '0' },
          '60%, 100%': { opacity: '1' }
        },
        dot3: {
          '0%, 60%': { opacity: '0' },
          '80%, 100%': { opacity: '1' }
        },
      },
      colors: {
        primary: '#2563eb', // blue-600
      },
    },
  },
  plugins: [],
}; 