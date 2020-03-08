import { MainLayout } from 'layouts/MainLayout';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const Cabin: FC = () => {
  return (
    <MainLayout title={`Sodyba ,,Senoji gegužinė"`}>
      <Wrapper>dzfd</Wrapper>
    </MainLayout>
  );
};
