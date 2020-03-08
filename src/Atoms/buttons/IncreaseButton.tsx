import { Span } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledSpan = styled(Span)`
  line-height: 5px;
  color: ${props => props.theme.colors.text.inactive};
`;

interface Props {
  className?: string;
  onClick?(): void;
  children: string;
}

const IncreaseButtonBase: FC<Props> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      <StyledSpan weight="700">{children}</StyledSpan>
    </button>
  );
};

export const IncreaseButton = styled(IncreaseButtonBase)`
  padding: 5px 20px;
  background: none;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(189, 189, 189, 0.7);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    background: ${props => props.theme.colors.button.default.backgroundColor};
    ${StyledSpan} {
      color: ${props => props.theme.colors.button.default.textColor};
    }
  }
`;
