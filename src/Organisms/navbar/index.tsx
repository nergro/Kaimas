import { ReactComponent as LogoSVG } from 'assets/logo/logo.svg';
import { LinkButton } from 'Atoms/buttons/LinkButton';
import { Icon } from 'Atoms/Icon';
import { Link } from 'Atoms/links/Link';
import { Menu } from 'Atoms/Menu';
import { P } from 'Atoms/text';
import { MobileSideNav } from 'Molecules/MobileSideNav';
import { AccountModal } from 'Organisms/AccountModal';
import { LoginModal } from 'Organisms/LoginModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { handleLogout } from 'services/auth';
import { getAuthStatus } from 'services/localStorage';
import styled from 'styled-components/macro';

import { Locale } from '../locale';

const HeaderContent = styled.div`
  display: flex;
  background: ${props => props.theme.colors.background.navbar};
  padding: 20px 15px;
  align-items: center;
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
`;

const Logo = styled.button`
  display: flex;
  cursor: pointer;
  background: none;
  border: none;
  &:hover {
    opacity: 0.9;
  }
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
  text-transform: uppercase;
  margin-right: 10px;

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
  const { t } = useTranslation();
  const { push } = useHistory();
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isAuth, setIsAuth] = useState<boolean | undefined>(getAuthStatus());

  const onLogin = (): void => {
    setMobileNavbarOpen(false);
    setLoginOpen(true);
  };

  const onLogout = (): void => {
    handleLogout(t('You logged out'));
    setIsAuth(false);
    setMobileNavbarOpen(false);
    window.location.reload();
  };

  const onLoginModalClose = (): void => {
    setLoginOpen(false);
    setIsAuth(getAuthStatus());
  };

  const onAccountOpen = (): void => {
    setMobileNavbarOpen(false);
    setAccountOpen(true);
  };

  return (
    <div className={className}>
      <HeaderContent>
        <LogoWrapper>
          <Logo onClick={() => push('/')}>
            <LogoIcon svgComponent={LogoSVG} />
            <LogoLabel>{t('Time for vacation')}</LogoLabel>
          </Logo>
        </LogoWrapper>
        <MenuButton
          onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}
          isOpen={mobileNavbarOpen}
        />
        <StyledLink to="/">{t('Home')}</StyledLink>
        <StyledLink to="/cabins">{t('Cabins')}</StyledLink>
        <StyledLink to="/activities">{t('Activities')}</StyledLink>
        {isAuth && <StyledLinkButton onClick={onAccountOpen}>{t('Account')}</StyledLinkButton>}
        {!isAuth && <StyledLinkButton onClick={onLogin}>{t('Login')}</StyledLinkButton>}
        {isAuth && <StyledLinkButton onClick={onLogout}>{t('Logout')}</StyledLinkButton>}
        <Locale />
      </HeaderContent>
      <LoginModal isOpen={loginOpen} onClose={onLoginModalClose} />
      <AccountModal isOpen={accountOpen} onClose={() => setAccountOpen(false)} />
      <MobileSideNav
        isOpen={mobileNavbarOpen}
        onClose={() => setMobileNavbarOpen(false)}
        onLogin={onLogin}
        onLogout={onLogout}
        isAuth={isAuth}
        onAccount={onAccountOpen}
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
  z-index: 9;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 0.2s ease-in;
  ${HeaderContent} {
    background: ${props =>
      props.scrolled ? 'rgba(34, 34, 34, 0.9)' : 'rgba(255, 255, 255, 0.15)'};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;
