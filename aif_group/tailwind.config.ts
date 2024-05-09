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
        sample_img_bg: '#C3DBD7',
        footer_text: '#787878',
        form_color: '#8F8F8F',
      },
      screens: {
        sm: { min: '393px', max: '768px' },
        mmd: { min: '393px', max: '974px' },
        md: { min: '393px', max: '1220px' },
        lg: { min: '1220px' },
      },
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
        inter: ['var(--font-inter)'],
      },
      height: {
        header: '8.875rem',
        banner: '51.25rem',
        footer: '18.75rem',
      },
      animation: {
        slide1: '64s linear 0s infinite normal forwards running slide1',
        slide2: '64s linear 0s infinite normal forwards running slide2',
        up_fadeIn: '1s linear 0s up_fadeIn',
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
        up_fadeIn: {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      dropShadow: {
        gray: '0 0 20px rgba(0, 0, 0, 0.25)',
        mint: '0 0 30px rgba(0, 255, 209, 0.32)',
        tShirt: '0 4px 4px rgba(0, 0, 0, 0.2)',
        tShirtMini: '0 1.6px 1.6px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
