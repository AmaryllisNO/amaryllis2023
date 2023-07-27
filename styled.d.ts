import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      onBackground: string;
      text: string;
      offWhite: string;
      fade: string;
      fadeLight: string;
    };

    fonts: {
      main: any;
      trispaced: any;
    };

    measurements: {
      sidebar: string;
    };

    breakpoints: {
      mobile: string;
    };
  }
}
