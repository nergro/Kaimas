import { contentClassNames, Modal } from 'Atoms/Modal';
import { H1, P } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const StyledModal = styled(Modal)`
  .${contentClassNames.base} {
    max-width: 45%;
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
