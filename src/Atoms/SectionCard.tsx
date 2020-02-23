import { ImageBox } from 'Atoms/ImageBox';
import { CardLink } from 'Atoms/links/CardLink';
import { H2, P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface DivProps {
  'data-toright'?: boolean;
}

const Wrapper = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.card.background};
  display: flex;
  width: 60%;
  margin: 0 auto;
  min-height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 70%;
    flex-wrap: wrap;
  }
`;

const Left = styled.div<DivProps>`
  width: 50%;
  padding: 15px 30px;

  display: flex;
  flex-direction: column;
  order: ${props => (props['data-toright'] ? 2 : 1)};

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
`;

const Title = styled(H2).attrs(() => ({
  weight: '500',
}))`
  color: ${props => props.theme.colors.card.title};
`;

const Description = styled(P)`
  margin-top: 20px;
  color: ${props => props.theme.colors.card.description};
`;

const StyledCardLink = styled(CardLink)`
  margin-top: 50px;
`;

const Right = styled.div`
  width: 50%;
  order: 1;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    min-height: 250px;
    order: 3;
  }
`;

interface Props {
  className?: string;
  title: string;
  description: string;
  path: string;
  image: string;
  toRight?: boolean;
}

export const SectionCard: FC<Props> = ({ className, title, description, path, image, toRight }) => {
  return (
    <Wrapper className={className}>
      <Left data-toright={toRight}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StyledCardLink to={path}>Sąrašas</StyledCardLink>
      </Left>
      <Right>
        <ImageBox image={image} />
      </Right>
    </Wrapper>
  );
};
