import { MainLayout } from 'layouts/MainLayout';
import { CabinList } from 'Molecules/CabinList';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`;

const ListWrapper = styled.div`
  flex-grow: 1;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    order: 2;
  }
`;

const FilterWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    order: 1;
  }
`;

export const Cabins: FC = () => {
  return (
    <MainLayout title="Sodybos">
      <Wrapper>
        <ListWrapper>
          <CabinList />
        </ListWrapper>
        <FilterWrapper>There will be filter</FilterWrapper>
      </Wrapper>
    </MainLayout>
  );
};
