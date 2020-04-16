import FullLogoPng from 'assets/full-logo.png';
import LogoPng from 'assets/logo.png';
import { rgba } from 'polished';
import { DefaultTheme } from 'styled-components/macro';

export const lightTheme: DefaultTheme = {
  fontFamily: {
    Poppins: '"Poppins", Sans-serif',
  },
  fonts: {
    HeaderBold: '600 60px Poppins, Sans-serif',
    Header: '400 60px Poppins, Sans-serif',
    SectionHeaderBold: '600 50px Poppins, Sans-serif',
    SectionHeaderSemiBold: '500 50px Poppins, Sans-serif',
    SectionHeader: '400 50px Poppins, Sans-serif',
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
    sm: '450px',
    s: '700px',
    m: '1000px',
    l: '1300px',
    xl: '1600px',
  },
  colors: {
    background: {
      primary: '#FFFFFF',
      navbar: rgba(34, 34, 34, 0.9),
      mobileDrawer: rgba(34, 34, 34, 0.9),
    },
    button: {
      default: {
        backgroundColor: '#F8B600',
        borderColor: '#F8B600',
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
      backgroundColor: 'transparent',
      backgroundOpen: rgba(0, 0, 0, 0.7),
      borderColor: rgba(0, 0, 0, 0.2),
      borderColorActive: rgba(0, 0, 0, 0.2),
      placeholderColor: '#FFFFFF',
      textColor: '#FFFFFF',
      textActiveColor: '#FFFFFF',
    },
    scrollbar: {
      track: '#DDDDDD',
      thumb: '#055B7A',
    },
    link: {
      default: '#FFFFFF',
      hover: '#F8B600',
    },
    card: {
      background: '#FFFFFF',
      title: rgba(0, 0, 0, 0.87),
      description: rgba(0, 0, 0, 0.87),
      link: '#F8B600',
      linkHover: '#222222',
    },
    text: {
      main: '#000000',
      secondary: '#FFFFFF',
      warning: '#F8B600',
      available: '#32a852',
      inactive: '#4f4f4f',
      error: '#FF0000',
    },
    loader: '#F8B600',
    input: {
      border: '#EEEEEE',
      borderFocus: '#8c8c8c',
      text: '#495057',
      background: 'transparent',
    },
    tab: {
      background: rgba(255, 255, 255, 0.25),
      backgroundActive: '#FFFFFF',
      text: '#FFFFFF',
      textActive: '#495057',
    },
    cabinTab: {
      background: '#EEEEEE',
      backgroundActive: '#FFFFFF',
      text: '#000000',
      textActive: '#F8B600',
    },
    footer: {
      background: '#04091E',
      title: '#FFFFFF',
      text: '#777777',
      border: '#333333',
    },
    review: {
      border: '#000000',
    },
  },
  images: {
    logo: FullLogoPng,
    mobileLogo: LogoPng,
  },
};
