import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
      },
      backgroundImage: {
        'spotlight':
          'radial-gradient(1200px 600px at 80% -10%, rgba(56,189,248,0.15), rgba(139,92,246,0.05) 40%, rgba(10,10,10,0) 70%)',
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(2, 6, 23, 0.6)',
        glow: '0 0 0 1px rgba(139, 92, 246, 0.35), 0 8px 40px rgba(56, 189, 248, 0.25)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};

export default config;


