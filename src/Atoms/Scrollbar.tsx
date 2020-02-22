import { css } from 'styled-components/macro';

export const Scrollbar = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
  }
  scrollbar-width: 8px;
`;
