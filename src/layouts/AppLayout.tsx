import { ErrorBoundary } from 'errorBoundary';
import { Footer } from 'Molecules/Footer';
import { Navbar } from 'Organisms/navbar';
import { ErrorPage } from 'pages/Error';
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
  loginOpen: boolean;
  setLoginOpen: (value: boolean) => void;
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = ({ children, className, loginOpen, setLoginOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const didScroll = window.scrollY < 50 ? false : true;
      setScrolled(didScroll);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  return (
    <LayoutStyled className={className}>
      <Navbar scrolled={scrolled} loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <ErrorBoundary error={<ErrorPage />}>
        <Content>{children}</Content>
      </ErrorBoundary>
      <Footer />
    </LayoutStyled>
  );
};
