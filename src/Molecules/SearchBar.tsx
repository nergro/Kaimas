import { ReactComponent as SearchSvg } from 'assets/Search.svg';
import { SearchInput } from 'Atoms/SearchInput';
import { SearchCloseButton } from 'Molecules/SearchCloseButton';
import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  height: 128px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: ${props => props.theme.colors.background.primary}; // TODO not sure if this is correct
  padding-left: 45px;
  box-sizing: border-box;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 66px;
    padding-left: 16.5px;
  }
`;
const SearchIcon = styled(SearchSvg)`
  width: 40px;
  height: 40px;
  margin-right: 30px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 27px;
    height: 27px;
    margin-right: 16.5px;
  }
`;

export const SearchBar: React.FC = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <SearchInput />
      <SearchCloseButton />
    </Wrapper>
  );
};
