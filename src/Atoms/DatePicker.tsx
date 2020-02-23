import DatePickerComp from 'react-datepicker';
import styled from 'styled-components/macro';

export const DatePicker = styled(DatePickerComp)`
  width: 100%;
  padding: 12px;
  font: ${props => props.theme.fonts.smallTextLight};
  border: 1px solid ${props => props.theme.colors.input.border};
  color: ${props => props.theme.colors.input.text};
  background: ${props => props.theme.colors.input.background};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  &:focus {
    border-color: ${props => props.theme.colors.input.borderFocus};
  }
`;
