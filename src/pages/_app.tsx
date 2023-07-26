import '@/styles/global.css';
import GlobalStyle from '../components/globalStyle';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { theme } from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main className={theme.fonts.main.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
