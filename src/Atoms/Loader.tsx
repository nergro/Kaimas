import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const cubeGridScaleDelay = keyframes`
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
`;

const Spinner = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.colors.loader};
  animation: ${cubeGridScaleDelay} 0.8s infinite ease-in-out;
`;

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return <Spinner className={className} />;
};
