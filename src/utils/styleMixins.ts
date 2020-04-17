import { css } from 'styled-components/macro';

export const ScrollbarMixin = css`
  &::-webkit-scrollbar {
    width: 10px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.scrollbar.track};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.scrollbar.thumb};
  }

  scrollbar-color: ${props =>
    props.theme.colors.scrollbar.thumb + ' ' + props.theme.colors.scrollbar.track};
  scrollbar-width: 10px;
`;
