import { CabinTab } from 'Atoms/buttons/CabinTab';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  margin: 50px 40px 0 0;
`;

const Tabs = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 40px;
  background: ${props => props.theme.colors.background.primary};
`;

export const CabinInfo: FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Apie');
  const { push } = useHistory();
  return (
    <Wrapper>
      <Tabs>
        <CabinTab active={activeSection === 'Apie'} onClick={() => setActiveSection('Apie')}>
          Apie
        </CabinTab>
        <CabinTab
          active={activeSection === 'Privalumai'}
          onClick={() => setActiveSection('Privalumai')}
        >
          Privalumai
        </CabinTab>
        <CabinTab
          active={activeSection === 'Atsiliepimai'}
          onClick={() => setActiveSection('Atsiliepimai')}
        >
          Atsiliepimai
        </CabinTab>
        <CabinTab active={false} onClick={() => push('/cabins/55/reservation')}>
          Rezervacija
        </CabinTab>
      </Tabs>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Content>
    </Wrapper>
  );
};
