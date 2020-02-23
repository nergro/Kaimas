import { Footer } from 'Molecules/Footer';
import { Navbar } from 'Organisms/navbar';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = ({ children, className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const didScroll = window.scrollY < 100 ? false : true;
      setScrolled(didScroll);
    });
  }, [setScrolled]);

  return (
    <LayoutStyled className={className}>
      <Navbar scrolled={scrolled} />
      <Content>{children}</Content>
      <Footer />
    </LayoutStyled>
  );
};
