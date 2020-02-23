import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
  image: string;
}

const ImageBoxBase: FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};

export const ImageBox = styled(ImageBoxBase)`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
`;
