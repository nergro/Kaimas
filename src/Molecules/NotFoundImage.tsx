import React, { FC } from 'react';
import styled from 'styled-components/macro';

const ImageContainer = styled.div`
  display: flex;
  max-width: 512px;
  width: 40%;
  height: auto;
  align-items: flex-start;
`;

// const IconStyled = styled(Icon)`
//   height: 100%;
//   width: 100%;
// `;

interface NotFoundImageProps {
  className?: string;
}

export const NotFoundImage: FC<NotFoundImageProps> = ({ className }) => {
  return <ImageContainer className={className}>{/* <IconStyled /> */}</ImageContainer>;
};
