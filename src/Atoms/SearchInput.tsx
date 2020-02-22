import React from 'react';
import styled from 'styled-components/macro';

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  margin-right: 30px;
  font-weight: 500;
  border: none;
  outline: none;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font: ${props => props.theme.fonts.bigText};
    &::placeholder {
      opacity: 0.8;
    }
    font-weight: 500;
    margin-right: 16.5px;
  }
`;
export const SearchInput: React.FC = () => {
  return (
    <Input type="text" name="search" placeholder="Search" autoComplete="off" spellCheck="false" />
  );
};
