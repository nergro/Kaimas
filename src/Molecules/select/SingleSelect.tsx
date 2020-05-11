import { SearchSelectControl } from 'Atoms/select/SearchSelectControl';
import { SearchSelectDropdownIndicator } from 'Atoms/select/SearchSelectDropdownIndicator';
import { SearchSelectMenuList } from 'Atoms/select/SearchSelectMenuList';
import { SearchSelectMultiValueLabel } from 'Atoms/select/SearchSelectMultiValueLabel';
import { StyledSelectBase } from 'Atoms/select/SelectStyles';
import React, { FC } from 'react';
import Select from 'react-select';
import styled from 'styled-components/macro';
import { SearchSelectOption } from 'types/searchSelectOption';

const StyledSelect = styled(Select)`
  ${StyledSelectBase};

  .${props => props.classNamePrefix}__control--has-value {
    padding-left: 10px;
    .${props => props.classNamePrefix}__search-icon {
      margin-right: 4px;
    }
  }

  .${props => props.classNamePrefix}__multi-value__label {
    background: ${props => props.theme.colors.select.multiSelectOption.background};
    color: ${props => props.theme.colors.select.multiSelectOption.text};
  }
  .${props => props.classNamePrefix}__multi-value__remove {
    background: ${props => props.theme.colors.select.multiSelectOption.closeButtonBackground};
    & > svg {
      fill: ${props => props.theme.colors.select.multiSelectOption.closeButton};
    }
    &:hover {
      background: ${props => props.theme.colors.select.multiSelectOption.closeButtonBackground};
      opacity: 0.9;
      cursor: pointer;
    }
  }
  .${props => props.classNamePrefix}__clear-indicator {
    display: none;
  }
  .${props => props.classNamePrefix}__multi-value {
    /* 95% so that search cursor would stay in the same line */
    width: 95%;
  }
  .${props => props.classNamePrefix}__multi-value__label {
    width: 100%;
  }
`;

interface Props {
  className?: string;
  options: SearchSelectOption[];
  placeholder: string;
  isClearable?: boolean;
  onChange?: (value?: SearchSelectOption) => void;
  value?: SearchSelectOption;
  isMulti?: boolean;
}

export const SingleSelect: FC<Props> = ({ ...rest }) => {
  return (
    <StyledSelect
      classNamePrefix="search-select"
      components={{
        Control: SearchSelectControl,
        MenuList: SearchSelectMenuList,
        DropdownIndicator: SearchSelectDropdownIndicator,
        MultiValueLabel: SearchSelectMultiValueLabel,
      }}
      showDropdown
      {...rest}
    />
  );
};
