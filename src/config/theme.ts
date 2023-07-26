import { DefaultTheme } from 'styled-components';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const theme: DefaultTheme = {
  colors: {
    primary: '#FF3968',
    background: '#14161A',
    onBackground: '#242830',
    text: '#E3E3E3',
    offWhite: '#AEB0B2',
    fade: '#3B414F',
    fadeLight: '#798396',
  },

  fonts: {
    main: inter,
  },

  measurements: {
    sidebar: '250px',
  },

  breakpoints: {
    mobile: '768px',
  },
};
