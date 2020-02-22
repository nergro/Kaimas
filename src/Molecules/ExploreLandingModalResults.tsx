import React, { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components/macro';

const Results = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 37px;
`;

const ResultsTitle = styled.p`
  font: ${props => props.theme.fonts.bigText};
  color: ${props => props.theme.colors.text.main};
  margin: 0 0 10px 0;
`;

const ResultsCaption = styled.p`
  font: ${props => props.theme.fonts.normalText};
  color: ${props => props.theme.colors.text.main};
`;

const ResultsList = styled.div`
  margin-top: 20px;
  overflow: auto;
`;

interface Props {
  title: string;
  caption: ReactNode;
  children: ReactElement[];
  results: boolean;
}

export const ExploreLandingModalResults: FC<Props> = ({ title, caption, children }) => {
  return (
    <Results>
      <ResultsTitle>{title}</ResultsTitle>
      <ResultsCaption>{caption}</ResultsCaption>
      <ResultsList>{children}</ResultsList>
    </Results>
  );
};
