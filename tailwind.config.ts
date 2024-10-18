import { Colors } from './src/common/constants/common';
/** @type {import('tailwindcss').Config} */

interface IColor {
  [key: string]: unknown;
}

const generateColors = () => {
  const res: IColor = {};
  Object.keys(Colors).map((color: string) => {
    res[color] = `var(--${color})`;
  });
  return res;
};
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...generateColors(),
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
