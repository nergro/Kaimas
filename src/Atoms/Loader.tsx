import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const foldCubeAngle = keyframes`
0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Wrapper = styled.div`
  margin: 20px auto;
  width: 65px;
  height: 65px;
  position: relative;
  transform: rotateZ(45deg);
`;

const Cube = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.loader};
    animation: ${foldCubeAngle} 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
`;

const Cube2 = styled(Cube)`
  transform: scale(1.1) rotateZ(90deg);
  &::before {
    animation-delay: 0.3s;
  }
`;

const Cube3 = styled(Cube)`
  transform: scale(1.1) rotateZ(180deg);
  &::before {
    animation-delay: 0.6s;
  }
`;

const Cube4 = styled(Cube)`
  transform: scale(1.1) rotateZ(270deg);
  &::before {
    animation-delay: 0.9s;
  }
`;

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <Spinner className={className}>
      <Wrapper>
        <Cube />
        <Cube2 />
        <Cube4 />
        <Cube3 />
      </Wrapper>
    </Spinner>
  );
};
