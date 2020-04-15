import { CabinTab } from 'Atoms/buttons/CabinTab';
import React, { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { TabSection } from 'types/service';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

  width: 75%;
  margin: 0 40px 0 0;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 2;
    width: 90%;
    margin: 30px auto 0;
  }
`;

const Tabs = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const StyledTab = styled(CabinTab)`
  padding: 0;
  width: 33.3333%;
  height: 65px;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 40px;
  background: ${props => props.theme.colors.background.primary};
`;

interface Props {
  className?: string;
  showBenefits?: boolean;
  aboutContent: ReactElement;
  benefitsContent?: ReactElement;
  reviewsContent: ReactElement;
}
export const ServiceTabs: FC<Props> = ({
  className,
  aboutContent,
  benefitsContent,
  reviewsContent,
}) => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<TabSection>('About');
  return (
    <Wrapper className={className}>
      <Tabs>
        <StyledTab active={activeSection === 'About'} onClick={() => setActiveSection('About')}>
          {t('About')}
        </StyledTab>
        {benefitsContent && (
          <StyledTab
            active={activeSection === 'Benefits'}
            onClick={() => setActiveSection('Benefits')}
          >
            {t('Benefits')}
          </StyledTab>
        )}
        <StyledTab active={activeSection === 'Reviews'} onClick={() => setActiveSection('Reviews')}>
          {t('Reviews')}
        </StyledTab>
      </Tabs>
      <Content>
        {activeSection === 'About'
          ? aboutContent
          : activeSection === 'Benefits'
          ? benefitsContent
          : reviewsContent}
      </Content>
    </Wrapper>
  );
};
