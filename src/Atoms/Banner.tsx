import bannerImg from 'assets/banner2.jpg';
import { H1 } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${bannerImg});
  background-size: cover;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 160px;
  }
`;

const Overlay = styled.div`
  background: rgba(4, 9, 30, 0.5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledTitle = styled(H1)`
  margin: 0 0 30px 0;
  font: ${props => props.theme.fonts.SectionHeader};
  color: ${props => props.theme.colors.text.secondary};
`;

interface Props {
  className?: string;
  title?: string;
}

export const Banner: FC<Props> = ({ className, title }) => {
  return (
    <Wrapper className={className}>
      <Overlay>{title && <StyledTitle>{title}</StyledTitle>}</Overlay>
    </Wrapper>
  );
};
