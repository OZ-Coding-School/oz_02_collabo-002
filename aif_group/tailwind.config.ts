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
        btn_bg: '#b4b4b4',
        btn_text: '#6c6c6c',
        bg: '#f7f7f7',
        sample_img_bg: '#C3DBD7',
      },
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
      },
      height: {
        header: '142px',
        banner: '820px',
        footer: '300px',
      },
      animation: {
        slide1: '64s linear 0s infinite normal forwards running slide1',
        slide2: '64s linear 0s infinite normal forwards running slide2',
      },
      keyframes: {
        slide1: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '50.01%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slide2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
