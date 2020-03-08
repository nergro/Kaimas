import React, { FC } from 'react';
import Gallery, { ReactImageGalleryItem } from 'react-image-gallery';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
  images: ReactImageGalleryItem[];
}

const ImageGalleryBase: FC<Props> = ({ className, images }) => {
  return <Gallery additionalClass={className} items={images} />;
};

export const ImageGallery = styled(ImageGalleryBase)`
  width: 70%;
  /* height: 400px; */
`;
