import React, { FC, ReactNode } from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components/macro';
import { FontSizeCollection } from 'types/fontSizeCollection';

type Size = 'small' | 'regular' | 'medium' | 'normal' | 'mediumBig' | 'big' | 'veryBig';

const sizes: FontSizeCollection<Size> = {
  small: {
    desktop: '16px',
    mobile: '14px',
  },
  regular: {
    desktop: '20px',
    mobile: '16px',
  },
  medium: {
    desktop: '25px',
    mobile: '16px',
  },
  normal: {
    desktop: '25px',
    mobile: '20px',
  },
  mediumBig: {
    desktop: '30px',
    mobile: '25px',
  },
  big: {
    desktop: '38px',
    mobile: '30px',
  },
  veryBig: {
    desktop: '80px',
    mobile: '35px',
  },
};

const lineHeights = {
  default: '31px',
  unset: 'unset',
  referenceTitle: '24px',
};

interface Props {
  className?: string;
  children: ReactNode;
  size?: Size;
  color?: keyof DefaultTheme['colors']['text'];
  weight?: '400' | '500' | '600' | '700';
  font?: keyof DefaultTheme['fontFamily'];
  lineHeight?: keyof typeof lineHeights;
}

// this is common styles for all heading tags
const componentFactory = (comp: FC<Props>): StyledComponent<FC<Props>, DefaultTheme> =>
  styled(comp)`
    color: ${props => props.theme.colors.text[props.color || 'main']};
    font-family: ${props => props.theme.fontFamily[props.font || 'Poppins']};
    font-weight: ${props => props.weight || '400'};
    font-size: ${props => sizes[props.size || 'normal'].desktop};
    line-height: ${props => lineHeights[props.lineHeight || 'default']};
    text-align: center;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      font-size: ${props => sizes[props.size || 'veryBig'].mobile};
    }
  `;

const componentH2 = (comp: FC<Props>): StyledComponent<FC<Props>, DefaultTheme> =>
  styled(comp)`
    color: ${props => props.theme.colors.text[props.color || 'main']};
    font-family: ${props => props.theme.fontFamily[props.font || 'Poppins']};
    font-weight: ${props => props.weight || '400'};
    font-size: ${props => sizes[props.size || 'normal'].desktop};
    line-height: ${props => lineHeights[props.lineHeight || 'default']};
    text-align: center;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      font-size: ${props => sizes[props.size || 'normal'].mobile};
    }
  `;

const componentH3 = (comp: FC<Props>): StyledComponent<FC<Props>, DefaultTheme> =>
  styled(comp)`
    color: ${props => props.theme.colors.text[props.color || 'main']};
    font-family: ${props => props.theme.fontFamily[props.font || 'Poppins']};
    font-weight: ${props => props.weight || '400'};
    font-size: ${props => sizes[props.size || 'regular'].desktop};
    line-height: ${props => lineHeights[props.lineHeight || 'default']};
    text-align: center;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      font-size: ${props => sizes[props.size || 'regular'].mobile};
    }
  `;

const H1Comp: FC<Props> = ({ className, children }) => <h1 className={className}>{children}</h1>;
export const H1 = componentFactory(H1Comp);

const H2Comp: FC<Props> = ({ className, children }) => <h2 className={className}>{children}</h2>;
export const H2 = componentH2(H2Comp);

const H3Comp: FC<Props> = ({ className, children }) => <h3 className={className}>{children}</h3>;
export const H3 = componentH3(H3Comp);

const H4Comp: FC<Props> = ({ className, children }) => <h4 className={className}>{children}</h4>;
export const H4 = componentFactory(H4Comp);
