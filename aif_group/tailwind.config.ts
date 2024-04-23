import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        main_active: '#00FFD1',
        main_passive: '#92EADA',
        text: '#858585',
        input_bg: '#f5f5f5',
        btn_border: '#b4b4b4',
        btn_text: '#6c6c6c',
        bg: '#f7f7f7',
      },
    },
  },
  plugins: [],
};
export default config;
