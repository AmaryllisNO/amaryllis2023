import "@/styles/global.css";
import GlobalStyle from "../components/globalStyle";
import { ThemeProvider, DefaultTheme } from "styled-components";
import type { AppProps } from "next/app";

export const theme: DefaultTheme = {
  colors: {
    primary: "#FF3968",
    background: "#202227",
    onBackground: "#202227",
    offWhite: "#E2FCFE",
    fade: "#B5C0D4",
    extraFaded: "#798396",
  },

  measurements: {
    sidebar: "250px",
  },

  breakpoints: {
    mobile: "768px",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
