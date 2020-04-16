import { SearchSelectControl } from 'Atoms/select/SearchSelectControl';
import { SearchSelectDropdownIndicator } from 'Atoms/select/SearchSelectDropdownIndicator';
import { SearchSelectMenuList } from 'Atoms/select/SearchSelectMenuList';
import { StyledSelectBase } from 'Atoms/select/SelectStyles';
import React, { FC } from 'react';
import ReactSelect, { ActionMeta } from 'react-select';
import styled from 'styled-components/macro';
import { SearchSelectOption } from 'types/searchSelectOption';

interface Props {
  classNamePrefix?: string;
  placeholder: string;
  className?: string;
  options: SearchSelectOption[];
  showDropdown?: boolean;
  isSearchable?: boolean;
  showSearch?: boolean;
  name?: string;
  isLoading?: boolean;
  isOptionDisabled?(): boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  value?: SearchSelectOption;
  onChange?: (selected?: SearchSelectOption, options?: ActionMeta) => void;
}

const StyledSearchSelect = styled(ReactSelect)`
  ${StyledSelectBase};
`;

export const Select: FC<Props> = ({
  classNamePrefix = 'search-select',
  isOptionDisabled,
  ...rest
}) => (
  <StyledSearchSelect
    components={{
      Control: SearchSelectControl,
      MenuList: SearchSelectMenuList,
      DropdownIndicator: SearchSelectDropdownIndicator,
    }}
    classNamePrefix={classNamePrefix}
    isOptionDisabled={isOptionDisabled}
    {...rest}
  />
);
