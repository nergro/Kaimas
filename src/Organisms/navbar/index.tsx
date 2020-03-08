import { ReactComponent as LogoSVG } from 'assets/logo/logo.svg';
import { LinkButton } from 'Atoms/buttons/LinkButton';
import { Icon } from 'Atoms/Icon';
import { Link } from 'Atoms/links/Link';
import { Menu } from 'Atoms/Menu';
import { P } from 'Atoms/text';
import { MobileSideNav } from 'Molecules/MobileSideNav';
import { LoginModal } from 'Organisms/LoginModal';
import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';

const HeaderContent = styled.div`
  display: flex;
  background: ${props => props.theme.colors.background.navbar};
  padding: 20px 15px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const LogoIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const LogoLabel = styled(P)`
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  margin-right: 10px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const MenuButton = styled(Menu)`
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: block;
  }
`;

interface Props {
  className?: string;
  scrolled?: boolean;
}
const NavbarBase: FC<Props> = ({ className }) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const onLoginClick = (): void => {
    setMobileNavbarOpen(false);
    setLoginOpen(true);
  };

  return (
    <div className={className}>
      <HeaderContent>
        <LogoWrapper>
          <LogoIcon svgComponent={LogoSVG} />
          <LogoLabel>Laikas Atostogoms</LogoLabel>
        </LogoWrapper>
        <MenuButton
          onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}
          isOpen={mobileNavbarOpen}
        />
        <StyledLink to="#">HOME</StyledLink>
        <StyledLink to="#">ABOUT</StyledLink>
        <StyledLink to="#">HOTELS</StyledLink>
        <StyledLink to="#">ACTIVITY</StyledLink>
        <StyledLink to="#">CONTACTS</StyledLink>
        <StyledLinkButton onClick={() => setLoginOpen(true)}>LOGIN</StyledLinkButton>
      </HeaderContent>
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <MobileSideNav
        isOpen={mobileNavbarOpen}
        onClose={() => setMobileNavbarOpen(false)}
        onLoginClick={onLoginClick}
      />
    </div>
  );
};

export const Navbar = styled(NavbarBase)`
  background: transparent;
  height: 120px;
  width: ${props => (props.scrolled ? '100%' : '80%')};
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 0.2s ease-in;
  & > div {
    background: ${props =>
      props.scrolled ? 'rgba(34, 34, 34, 0.9)' : 'rgba(255, 255, 255, 0.15)'};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;
