import { CabinListItem } from 'Atoms/CabinListItem';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { Cabin } from 'types/Cabin';

const mockedCabin: Cabin = {
  title: 'Sodyba ,,Senoji gegužinė"',
  capacity: 8,
  price: 220,
  description:
    'Poilsis nepamirštamoje sodyboje šalia nuostabaus ežero ir išskirtinio pušyno. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  imageUrl:
    'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  nextAvailableDate: '2020-05-02',
};

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

export const CabinList: FC = () => {
  return (
    <Wrapper>
      <StyledCabin cabin={mockedCabin} />
      <StyledCabin cabin={mockedCabin} />
      <StyledCabin cabin={mockedCabin} />
      <StyledCabin cabin={mockedCabin} />
      <StyledCabin cabin={mockedCabin} />
      <StyledCabin cabin={mockedCabin} />
    </Wrapper>
  );
};
