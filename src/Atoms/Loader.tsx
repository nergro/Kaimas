import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const cubeGridScaleDelay = keyframes`
   0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);

  width: 40px;
  height: 40px;
  margin: 100px auto;
`;

const Cube = styled.div`
  width: 33%;
  height: 33%;
  background-color: ${props => props.theme.colors.loader};
  float: left;
  animation: ${cubeGridScaleDelay} 1.3s infinite ease-in-out;
`;

const Cube1 = styled(Cube)`
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
`;
const Cube2 = styled(Cube)`
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
`;
const Cube3 = styled(Cube)`
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
`;
const Cube4 = styled(Cube)`
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
`;
const Cube5 = styled(Cube)`
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
`;
const Cube6 = styled(Cube)`
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
`;
const Cube7 = styled(Cube)`
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
`;
const Cube8 = styled(Cube)`
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
`;
const Cube9 = styled(Cube)`
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
`;

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Cube1 />
      <Cube2 />
      <Cube3 />
      <Cube4 />
      <Cube5 />
      <Cube6 />
      <Cube7 />
      <Cube8 />
      <Cube9 />
    </Wrapper>
  );
};
