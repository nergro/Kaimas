import { Button } from 'Atoms/buttons/Button';
import { CabinListItem } from 'Atoms/CabinListItem';
import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { Cabin } from 'types/Cabin';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCabin = styled(CabinListItem)`
  margin-top: 20px;
  &:first-child {
    margin: 0;
  }
`;

const MoreButton = styled(Button)`
  margin-top: 20px;
`;

interface Props {
  className?: string;
  cabins: Cabin[];
}

export const CabinList: FC<Props> = ({ className, cabins }) => {
  const [cabinsToShow, setCabinsToShow] = useState<number>(8);
  return (
    <Wrapper className={className}>
      <List>
        {cabins.slice(0, cabinsToShow).map(cabin => (
          <StyledCabin key={cabin.id} cabin={cabin} />
        ))}
      </List>
      {cabinsToShow < cabins.length && (
        <MoreButton onClick={() => setCabinsToShow(cabinsToShow + 8)} outline>
          Rodyti daugiau
        </MoreButton>
      )}
    </Wrapper>
  );
};
