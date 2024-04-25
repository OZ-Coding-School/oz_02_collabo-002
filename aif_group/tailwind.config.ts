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
        btn_bg: '#d9d9d9',
        bg: '#f7f7f7',
        table_bg: '#e9e9e9',
        table_border: '#c4c4c4',
      },
      height: {
        header: '142px',
        banner: '820px',
        footer: '300px',
      },
      screens: {
        sm: { min: '393px', max: '768px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1080px' },
      },
    },
  },
  plugins: [],
};
export default config;
