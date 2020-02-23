import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';

interface Props {
  isOpen: boolean;
  onClick(): void;
  className?: string;
}

const MenuBase: FC<Props> = ({ onClick, className }) => (
  <button className={className} onClick={onClick}>
    <Span />
    <Span />
    <Span />
  </button>
);

const Span = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
`;

export const Menu = styled(MenuBase)`
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 10;
  transform: rotate(0deg);
  cursor: pointer;

  ${Span} {
    ${props =>
      props.isOpen
        ? css`
            &:nth-child(1) {
              top: 8px;
              transform: rotate(45deg);
            }

            &:nth-child(2) {
              display: none;
            }

            &:nth-child(3) {
              top: 8px;
              transform: rotate(-45deg);
            }
          `
        : css`
            &:nth-child(1) {
              top: 0px;
            }

            &:nth-child(2) {
              top: 8px;
            }

            &:nth-child(3) {
              top: 16px;
            }
          `}
  }
`;
