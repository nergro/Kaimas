import FullLogoPng from 'assets/full-logo.png';
import LogoPng from 'assets/logo.png';
import { DefaultTheme } from 'styled-components/macro';
import { rgba } from 'polished';

export const lightTheme: DefaultTheme = {
  fontFamily: {
    Poppins: '"Poppins", Sans-serif',
  },
  fonts: {
    HeaderBold: '600 60px Poppins, Sans-serif',
    Header: '400 60px Poppins, Sans-serif',
    bigTextBold: '700 20px Poppins, Sans-serif',
    bigText: '400 20px Poppins, Sans-serif',
    bigTextLight: '300 20px Poppins, Sans-serif',
    mediumTextBold: '700 18px Poppins, Sans-serif',
    mediumText: '400 18px Poppins, Sans-serif',
    normalText: '400 16px Poppins, Sans-serif',
    normalTextSemiBold: '500 16px Poppins, Sans-serif',
    normalTextBold: '600 16px Poppins, Sans-serif',
    smallText: '400 15px Poppins, Sans-serif',
    smallTextLight: '300 15px Poppins, Sans-serif',
    smallTextSemiBold: '500 15px Poppins, Sans-serif',
    smallTextBold: '600 15px Poppins, Sans-serif',
    tinyTextBold: '600 13px Poppins, Sans-serif',
    tinyText: '400 13px Poppins, Sans-serif',
  },
  breakpoints: {
    sm: '400px',
    s: '700px',
    m: '1000px',
    l: '1300px',
    xl: '1600px',
  },
  colors: {
    background: {
      primary: '#FFFFFF',
    },
    button: {
      default: {
        backgroundColor: '#F8B600',
        borderColor: '#000000',
        textColor: '#FFFFFF',
      },
      hover: {
        backgroundColor: '#222222',
        borderColor: '#000000',
        textColor: '#FFFFFF',
      },
      active: {
        backgroundColor: '#222222',
        borderColor: '#009FD5',
        textColor: '#009FD5',
      },
    },
    select: {
      backgroundColor: '#FFFFFF',
      borderColor: '#4F4F4F',
      borderColorActive: '#0077A0',
      placeholderColor: '#4F4F4F',
      textColor: '#4F4F4F',
      textActiveColor: '#004F6B',
    },
    scrollbar: {
      track: '#DDDDDD',
      thumb: '#055B7A',
    },
    link: {
      default: '#FFFFFF',
      hover: '#F8B600',
    },
    text: {
      main: '#000000',
      secondary: '#FFFFFF',
    },
    input: {
      border: '#EEEEEE',
      borderFocus: '#8c8c8c',
      text: '#495057',
      background: '#FFFFFF',
    },
    tab: {
      background: rgba(255, 255, 255, 0.25),
      backgroundActive: '#FFFFFF',
      text: '#FFFFFF',
      textActive: '#495057',
    },
  },
  images: {
    logo: FullLogoPng,
    mobileLogo: LogoPng,
  },
};