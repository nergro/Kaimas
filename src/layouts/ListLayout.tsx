import { H2 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    width: 85%;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
`;

const ListWrapper = styled.div`
  flex-grow: 1;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 2;
  }
`;

const FilterWrapper = styled.div`
  margin-left: 15px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 1;
    margin: 0;
    width: 40%;
    margin: 0 auto;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 75%;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 90%;
  }
`;

const StyledH2 = styled(H2)`
  text-align: left;
`;

const FilterTitleH2 = styled(H2)`
  text-align: left;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    text-align: center;
  }
`;

interface Props {
  className?: string;
  title: string;
  foundTitle: string;
  list: ReactElement;
  filter: ReactElement;
}

export const ListLayout: FC<Props> = ({ className, title, foundTitle, list, filter }) => {
  const { t } = useTranslation();
  return (
    <MainLayout title={title} className={className}>
      <Wrapper>
        <ListWrapper>
          <StyledH2>{foundTitle}</StyledH2>
          {list}
        </ListWrapper>
        <FilterWrapper>
          <FilterTitleH2>{t('Filter')}</FilterTitleH2>
          {filter}
        </FilterWrapper>
      </Wrapper>
    </MainLayout>
  );
};
