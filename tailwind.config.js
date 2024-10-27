/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transform: {
        'rotate-45': 'rotate(45deg)',
        '-rotate-45': 'rotate(-45deg)',
        'translate-y-1.5': 'translateY(0.375rem)', // Tailwind's spacing scale for 1.5
        '-translate-y-1.5': 'translateY(-0.375rem)', // Tailwind's spacing scale for -1.5
      },
      backgroundImage: {
        'cocktail': "url('/background.jpg')",
      },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'sans-serif'],
        helveticaBold: ['Helvetica Neue Bold', 'sans-serif'],
        helveticaThin: ['Helvetica Neue Thin', 'sans-serif'],
      },
      borderRadius: {
        extra: '85%',
      },
      backgroundColor: {
        'black-90': 'rgb(13, 12, 17)',
      },
    },
  },
  plugins: [
    
  ],
};

