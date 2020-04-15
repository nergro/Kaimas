import { P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const StyledP = styled(P)`
  margin-bottom: 10px;
`;

interface Props {
  className?: string;
  text: string;
}

export const AboutContent: FC<Props> = ({ className, text }) => {
  const splitted = text.split('.');
  return (
    <Wrapper className={className}>
      {splitted.map((x, i) => (
        <StyledP key={i}>{x}.</StyledP>
      ))}
    </Wrapper>
  );
};
