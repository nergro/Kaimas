import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

const LayoutStyled = styled.div`
  flex: 1 0 auto;
`;

interface Props {
  children: ReactNode;
  className?: string;
}

export const MainLayout: FC<Props> = ({ children, className }) => {
  return <LayoutStyled className={className}>{children}</LayoutStyled>;
};
