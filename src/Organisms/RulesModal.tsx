import { Button } from 'Atoms/buttons/Button';
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

const StyledButton = styled(Button)`
  margin: 20px 0 10px;
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

export const RulesModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <StyledModal className={className} isOpen={isOpen} onClose={onClose}>
      <Content>
        <H1>{t('Rules for using the information system')}</H1>
        <StyledP>{t('rules intro1')}</StyledP>
        <StyledP>{t('rules intro2')}</StyledP>
        <Section>
          <P weight="600">{t('rules section1 title')}</P>
          <ul>
            {t('rules section1 content')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Section>
        <Section>
          <P weight="600">{t('rules section2 title')}</P>
          <ul>
            {t('rules section2 content')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Section>
        <Section>
          <P weight="600">{t('rules section3 title')}</P>
          <ul>
            {t('rules section3 content')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Section>
        <Section>
          <P weight="600">{t('rules section4 title')}</P>
          <ul>
            {t('rules section4 content')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Section>
        <Section>
          <P weight="600">{t('rules section5 title')}</P>
          <ul>
            {t('rules section5 content')
              .split('\n')
              .map(line => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Section>
        <StyledButton onClick={onClose}>{t('Confirm')}</StyledButton>
      </Content>
    </StyledModal>
  );
};
