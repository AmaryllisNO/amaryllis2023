import { DefaultTheme } from 'styled-components';
import { Inter } from 'next/font/google';
import { Lekton } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const lekton = Lekton({ subsets: ['latin'], weight: '400' });

export const theme: DefaultTheme = {
  colors: {
    primary: '#FF3968',
    background: '#14161A',
    onBackground: '#242830',
    text: '#E3E3E3',
    offWhite: '#AEB0B2',
    fade: '#3B414F',
    fadeLight: '#565D6B',
  },

  fonts: {
    main: inter,
    trispaced: lekton,
  },

  measurements: {
    sidebar: '250px',
  },

  breakpoints: {
    mobile: '768px',
  },
};
