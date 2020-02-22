import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'Atoms/links/Link';
import { ReactComponent as LogoSVG } from 'assets/logo/logo.svg';
import { Icon } from 'Atoms/Icon';
import { P } from 'Atoms/text';

const Header = styled.div`
  background: transparent;
  height: 120px;
  width: 80%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const HeaderMain = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.15);
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
`;

export const Navbar = () => {
  return (
    <Header>
      <HeaderMain>
        <LogoWrapper>
          <LogoIcon svgComponent={LogoSVG} />
          <LogoLabel>Laikas Atostogoms</LogoLabel>
        </LogoWrapper>
        <StyledLink to="#">HOME</StyledLink>
        <StyledLink to="#">ABOUT</StyledLink>
        <StyledLink to="#">HOTELS</StyledLink>
        <StyledLink to="#">ACTIVITY</StyledLink>
        <StyledLink to="#">CONTACTS</StyledLink>
      </HeaderMain>
    </Header>
  );
};
