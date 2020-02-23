import React, { FC, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';
import { FontSizeCollection } from 'types/fontSizeCollection';

type Size = 'small' | 'normal' | 'medium' | 'big' | 'veryBig';
const sizes: FontSizeCollection<Size> = {
  small: {
    desktop: '15px',
    mobile: '12px',
  },
  normal: {
    desktop: '16px',
    mobile: '14px',
  },
  medium: {
    desktop: '18px',
    mobile: '16px',
  },
  big: {
    desktop: '20px',
    mobile: '16px',
  },
  veryBig: {
    desktop: '25px',
    mobile: '16px',
  },
};

interface Props {
  className?: string;
  children: ReactNode;
  size?: Size;
  color?: keyof DefaultTheme['colors']['text'];
  weight?: '400' | '500' | '600' | '700';
}

const PComp: FC<Props> = ({ className, children }) => <p className={className}>{children}</p>;

export const P = styled(PComp)`
  color: ${props => props.theme.colors.text[props.color || 'main']};
  font-family: ${props => props.theme.fontFamily.Poppins};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => sizes[props.size || 'normal'].desktop};
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => sizes[props.size || 'veryBig'].mobile};
  }
`;
