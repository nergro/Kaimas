import { InvisibleButton } from 'Atoms/buttons/InvisibleButton';
import { Link } from 'Atoms/links/Link';
import { H2, P } from 'Atoms/text';
import { NewsletterForm } from 'Molecules/NewsletterForm';
import { PrivacyModal } from 'Organisms/PrivacyModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const StyledLinkButton = styled(InvisibleButton)`
  cursor: pointer;
  font: ${props => props.theme.fonts.mediumText};
  color: ${props => props.theme.colors.footer.text};
  display: block;
  margin: 10px 0;
  text-transform: uppercase;
  &:hover {
    color: ${props => props.theme.colors.link.hover};
  }
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 80%;
    align-self: center;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  margin-top: 15px;
  border-top: 1px solid #333;
  padding-top: 15px;
`;

export const Footer: FC = () => {
  const { t } = useTranslation();
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);
  return (
    <FooterStyled>
      <Content>
        <Top>
          <About>
            <Title>{t('About')}</Title>
            <StyledP>
              {t(
                'Time for vacation - a convenient system that will ensure fast and convenient vacation planning and unforgettable rest in nature. Book your  vacation now!'
              )}
            </StyledP>
          </About>
          <Links>
            <Title>{t('Navigation')}</Title>
            <LinksWrapper>
              <StyledLink to="/">{t('Home')}</StyledLink>
              <StyledLink to="/cabins">{t('Cabins')}</StyledLink>
              <StyledLink to="/activities">{t('Activities')}</StyledLink>
              <StyledLinkButton onClick={() => setPrivacyModalOpen(true)}>
                {t('Privacy')}
              </StyledLinkButton>
            </LinksWrapper>
          </Links>
          <Newsletter>
            <Title>{t('Newsletter')}</Title>
            <StyledP>
              {t('Never miss a chance to get best deals by subscribing to our newsletter.')}
            </StyledP>
            <NewsletterForm />
          </Newsletter>
        </Top>
        <Bottom>
          <StyledP size="small" color="main">
            {t('Copyright')} © Nerijus Gromas
          </StyledP>
        </Bottom>
      </Content>
      <PrivacyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
    </FooterStyled>
  );
};
