import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { CabinSection } from 'types/cabin';

const Content = styled.div`
  padding: 40px;
  background: ${props => props.theme.colors.background.primary};
`;

const PerksList = styled.ul``;

const Perk = styled.li``;

interface Props {
  className?: string;
  section: CabinSection;
}

export const CabinTabContent: FC<Props> = ({ className, section }) => {
  if (section === 'Perks') {
    return (
      <Content>
        <PerksList>
          <Perk>Perk1</Perk>
          <Perk>Perk2</Perk>
          <Perk>Perk3</Perk>
          <Perk>Perk4</Perk>
          <Perk>Perk5</Perk>
        </PerksList>
      </Content>
    );
  }
  if (section === 'Reviews') {
    return <Content>reviews</Content>;
  }

  return (
    <Content className={className}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Content>
  );
};
