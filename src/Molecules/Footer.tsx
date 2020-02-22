import { P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const FooterStyled = styled.footer`
  box-sizing: border-box;
  width: 100%;
  padding: 15px 35px 15px 39px;
  display: flex;
  align-items: center;
  background: rgba('#FFFFFF', 0.9);
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <P size="small" color="main">
        Copyright © Nerijus Gromas
      </P>
    </FooterStyled>
  );
};
