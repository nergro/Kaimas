import { ReactComponent as ArrowSVG } from 'assets/UI/RightArrow.svg';
import { InputWithIcon } from 'Atoms/Input';
import { Link } from 'Atoms/links/Link';
import { H2, P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const FooterStyled = styled.footer`
  margin-top: 50px;
  background: ${props => props.theme.colors.footer.background};
  padding: 50px 0;
`;

const Content = styled.div`
  width: 60%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    justify-content: center;
  }
`;

const Title = styled(H2)`
  font: ${props => props.theme.fonts.normalTextBold};
  color: ${props => props.theme.colors.footer.title};
  text-transform: uppercase;
  margin-bottom: 25px;
`;

const StyledP = styled(P)`
  font: ${props => props.theme.fonts.smallText};
  color: ${props => props.theme.colors.footer.text};
`;

const About = styled.div`
  width: 30%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 50%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const Links = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 50%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const LinksWrapper = styled.div`
  text-align: left;
  column-count: 2;
  column-width: 45px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.footer.text};
  display: block;
  margin: 10px 0;
  &:first-child {
    margin-top: 0;
  }
`;

const Newsletter = styled.div`
  width: 30%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 80%;
    align-self: center;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const StyledInput = styled(InputWithIcon)`
  margin-top: 15px;
  input {
    border: 1px solid ${props => props.theme.colors.footer.border};
  }
`;

const Bottom = styled.div`
  margin-top: 15px;
  border-top: 1px solid #333;
  padding-top: 15px;
`;

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <Content>
        <Top>
          <About>
            <Title>About</Title>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in.
            </StyledP>
          </About>
          <Links>
            <Title>Navigation links</Title>
            <LinksWrapper>
              <StyledLink to="#">Home</StyledLink>
              <StyledLink to="#">About</StyledLink>
              <StyledLink to="#">Houses</StyledLink>
              <StyledLink to="#">Activities</StyledLink>
              <StyledLink to="#">Pricing</StyledLink>
              <StyledLink to="#">Contacts</StyledLink>
            </LinksWrapper>
          </Links>
          <Newsletter>
            <Title>Newsletter</Title>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </StyledP>
            <StyledInput
              icon={ArrowSVG}
              inputName="email"
              inputType="email"
              inputPlaceholder="Email Address"
            />
          </Newsletter>
        </Top>
        <Bottom>
          <StyledP size="small" color="main">
            Copyright © Nerijus Gromas
          </StyledP>
        </Bottom>
      </Content>
    </FooterStyled>
  );
};
