// import original module declarations
import 'styled-components/macro';

interface ButtonStateTheme {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

interface ButtonTheme {
  disabled?: ButtonStateTheme;
  default: ButtonStateTheme;
  hover: ButtonStateTheme;
  active: ButtonStateTheme;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
      };
      button: ButtonTheme;
      select: {
        backgroundColor: string;
        borderColor: string;
        borderColorActive: string;
        placeholderColor: string;
        textColor: string;
        textActiveColor: string;
      };
      scrollbar: {
        track: string;
        thumb: string;
      };
      link: {
        default: string;
        hover: string;
      };
      text: {
        main: string;
        secondary: string;
      };
      input: {
        border: string;
        borderFocus: string;
        text: string;
        background: string;
      };
      tab: {
        background: string;
        backgroundActive: string;
        text: string;
        textActive: string;
      };
    };
    images: {
      logo: string;
      mobileLogo: string;
    };
    fontFamily: {
      Poppins: string;
    };
    fonts: {
      HeaderBold: string;
      Header: string;
      bigText: string;
      bigTextBold: string;
      bigTextLight: string;
      mediumTextBold: string;
      mediumText: string;
      normalText: string;
      normalTextSemiBold: string;
      normalTextBold: string;
      smallText: string;
      smallTextSemiBold: string;
      smallTextLight: string;
      smallTextBold: string;
      tinyTextBold: string;
      tinyText: string;
    };
    breakpoints: {
      sm: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
