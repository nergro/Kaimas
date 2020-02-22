import { H1, P } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { NotFoundImage } from 'Molecules/NotFoundImage';
import { SearchSelect } from 'Molecules/select/SearchSelect';
import React from 'react';
import styled from 'styled-components/macro';

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 100px 10px 32px;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) and (min-width: ${props =>
      props.theme.breakpoints.m}) {
    padding: 100px 20px 32px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding: 100px 48px 32px;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto 40%;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const ExplanationSection = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    justify-content: center;
  }
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    justify-content: flex-end;
  }
`;

const CustomSearchSelect = styled(SearchSelect)`
  height: 44px;
  grid-row: 2 / 3;
  margin-top: 20px;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    grid-column: 2 / 3;
    max-width: 500px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    grid-column: 1 / 3;
  }
`;

const NotFoundImageStyled = styled(NotFoundImage)`
  width: 100%;
  justify-self: end;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    grid-row: 1 / 3;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    grid-row: 1 / 2;
  }
`;

const TitleStyled = styled(H1)`
  text-align: unset;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font: ${props => props.theme.fonts.HeaderBold};
    margin: 0 0 20px 0;
  }
  @media (min-width: ${props => props.theme.breakpoints.s}) and (max-width: ${props =>
      props.theme.breakpoints.m}) {
    margin: 0 0 30px 0;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    margin: 0 0 40px 0;
  }
`;

export const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <NotFoundPage>
        <GridSection>
          <NotFoundImageStyled />
          <TextContainer>
            <TitleStyled weight="600" font="Poppins" size="veryBig" color="main" lineHeight="unset">
              Hmm... I don’t recognize this bug.
            </TitleStyled>
            <P weight="600" size="veryBig" color="main">
              Let’s try identifying it together.
            </P>
          </TextContainer>
          <CustomSearchSelect
            placeholder="What were you looking for?"
            options={[{ value: 'Test', label: 'Test' }]}
            showSearch
          />
        </GridSection>
        <ExplanationSection>
          <P size="big" color="main">
            For the techies among us, this is error 404
          </P>
        </ExplanationSection>
      </NotFoundPage>
    </MainLayout>
  );
};
