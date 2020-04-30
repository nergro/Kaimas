import { contentClassNames, Modal, overlayClassNames } from 'Atoms/Modal';
import { H1, P } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const StyledModal = styled(Modal)`
  .${contentClassNames.base} {
    max-height: 80%;
    transform: translate(0%, -5%);

    max-width: 45%;
    width: 100%;
    @media (max-width: ${props => props.theme.breakpoints.l}) {
      max-width: 65%;
    }
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      max-width: 75%;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      max-width: 95%;
    }
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      max-width: 100%;
    }
  }
  .${overlayClassNames.afterOpen} {
    z-index: 1000;
  }
`;

const Content = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const StyledP = styled(P)`
  margin-bottom: 15px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
}

export const PrivacyModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <StyledModal className={className} isOpen={isOpen} onClose={onClose}>
      <Content>
        <H1>{t('Privacy policy')}</H1>
        <StyledP>{t('policy intro')}</StyledP>
        <Section>
          <P weight="600">{t('policy section1 title')}</P>
          <P>{t('policy section1 content')}</P>
          <ul>
            {t('policy section1 content list')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Section>
        <Section>
          <P weight="600">{t('policy section2 title')}</P>
          <P>{t('policy section2 content')}</P>
        </Section>
        <Section>
          <P weight="600">{t('policy section3 title')}</P>
          <P>{t('policy section3 content')}</P>
        </Section>
        <Section>
          <P weight="600">{t('policy section4 title')}</P>
          <P>{t('policy section4 content')}</P>
        </Section>
        <Section>
          <P weight="600">{t('policy section5 title')}</P>
          <ul>
            {t('rules section5 content')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
          <P>{t('policy section5 list title')}</P>
          <ul>
            {t('policy section5 list')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Section>
        <Section>
          <P weight="600">{t('policy section6 title')}</P>
          <P>{t('policy section6 content')}</P>
        </Section>
        <Section>
          <P weight="600">{t('policy section7 title')}</P>
          <P>{t('policy section7 content')}</P>
        </Section>
      </Content>
    </StyledModal>
  );
};
