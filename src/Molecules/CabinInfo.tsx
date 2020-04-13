import { CabinTab } from 'Atoms/buttons/CabinTab';
import { CabinTabContent } from 'Molecules/CabinTabContent';
import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { CabinSection } from 'types/cabin';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
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

interface Props {
  className?: string;
}
export const CabinInfo: FC<Props> = ({ className }) => {
  const [activeSection, setActiveSection] = useState<CabinSection>('About');
  return (
    <Wrapper className={className}>
      <Tabs>
        <StyledTab active={activeSection === 'About'} onClick={() => setActiveSection('About')}>
          Apie
        </StyledTab>
        <StyledTab active={activeSection === 'Perks'} onClick={() => setActiveSection('Perks')}>
          Privalumai
        </StyledTab>
        <StyledTab active={activeSection === 'Reviews'} onClick={() => setActiveSection('Reviews')}>
          Atsiliepimai
        </StyledTab>
      </Tabs>
      <CabinTabContent section={activeSection} />
    </Wrapper>
  );
};
