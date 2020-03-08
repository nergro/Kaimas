import { Banner } from 'Atoms/Banner';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

const LayoutStyled = styled.div`
  flex: 1 0 auto;
`;

interface Props {
  children: ReactNode;
  className?: string;
  title?: string;
  hideBanner?: boolean;
}

export const MainLayout: FC<Props> = ({ children, className, title, hideBanner }) => {
  return (
    <LayoutStyled className={className}>
      {!hideBanner && <Banner title={title} />}
      {children}
    </LayoutStyled>
  );
};
