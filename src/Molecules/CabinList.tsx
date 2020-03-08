import { CabinListItem } from 'Atoms/CabinListItem';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { Cabin } from 'types/Cabin';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCabin = styled(CabinListItem)`
  margin-top: 20px;
  &:first-child {
    margin: 0;
  }
`;

interface Props {
  className?: string;
  cabins: Cabin[];
}

export const CabinList: FC<Props> = ({ className, cabins }) => {
  return (
    <Wrapper className={className}>
      {cabins.map(cabin => (
        <StyledCabin key={cabin.id} cabin={cabin} />
      ))}
    </Wrapper>
  );
};
