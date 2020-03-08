import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { CabinInfo } from 'Molecules/CabinInfo';
import { ImageGallery } from 'Molecules/ImageGallery';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { mockedCabins } from '../Cabins/mockedCabins';

const Content = styled.div`
  padding: 50px 40px;
  display: flex;
`;

const ContentLeft = styled.div`
  flex-grow: 1;
`;

const Gallery = styled(ImageGallery)`
  width: 50%;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;

export const Cabin: FC = () => {
  const cabin = mockedCabins[0];
  const images = cabin.images.map(image => ({ original: image, thumbnail: image }));
  return (
    <MainLayout>
      <Content>
        <ContentLeft>
          <H1 size="mediumBig">{cabin.title}</H1>
          <CabinInfo />
        </ContentLeft>
        <Gallery images={images} />
      </Content>
    </MainLayout>
  );
};
