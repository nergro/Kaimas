import styled from 'styled-components/macro';

export const Tooltip = styled.div`
  width: 190px;
  top: -24px;
  left: 22px;
  padding: 8px 5px;
  color: #000000;
  background-color: ${props => props.theme.colors.text.main};
  font-weight: normal;
  font-size: 14px;
  border-radius: 8px;
  position: absolute;
  z-index: 10;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  display: none;
  text-align: center;
  user-select: none;
  @media (hover: none) {
    display: none !important;
  }
`;
