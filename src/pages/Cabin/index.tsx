import { ButtonLink } from 'Atoms/links/ButtonLink';
import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { CabinInfo } from 'Molecules/CabinInfo';
import { ImageGallery } from 'Molecules/ImageGallery';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { mockedCabins } from '../Cabins/mockedCabins';

const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBottom = styled.div`
  padding: 50px 40px;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`;

const StyledCabinInfo = styled(CabinInfo)`
  width: 75%;
  margin: 0 40px 0 0;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 2;
    width: 90%;
    margin: 30px auto 0;
  }
`;

const Title = styled(H1)`
  margin-bottom: 10px;
`;

const Gallery = styled(ImageGallery)`
  width: 50%;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 1;
    width: 90%;
    margin: 0 auto;
  }
`;

const ReservationButton = styled(ButtonLink)`
  align-self: flex-end;
  margin: 0 40px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    align-self: center;
    margin: 20px 0 0 0;
  }
`;

export const Cabin: FC = () => {
  const cabin = mockedCabins[0];
  const images = cabin.images.map(image => ({ original: image, thumbnail: image }));
  return (
    <MainLayout>
      <ContentTop>
        <Title size="big" weight="600">
          {cabin.nameLT}
        </Title>
        <ReservationButton to="/cabins/55/reservation">Rezervacija</ReservationButton>
      </ContentTop>
      <ContentBottom>
        <StyledCabinInfo />
        <Gallery images={images} />
      </ContentBottom>
    </MainLayout>
  );
};
