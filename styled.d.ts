import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      onBackground: string;
      offWhite: string;
      fade: string;
      extraFaded: string;
    };

    measurements: {
      sidebar: string;
    };

    breakpoints: {
      mobile: string;
    };
  }
}
