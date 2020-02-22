import { ReactComponent as DropdownIcon } from 'assets/SearchDropdown.svg';
import { Icon } from 'Atoms/Icon';
import React, { FC } from 'react';
import { components, IndicatorProps, OptionTypeBase } from 'react-select';

const { DropdownIndicator } = components;

export const SearchSelectDropdownIndicator: FC<IndicatorProps<OptionTypeBase>> = props => {
  return (
    <DropdownIndicator {...props}>
      <Icon
        svgComponent={DropdownIcon}
        className={`${props.selectProps.classNamePrefix}__dropdown-icon`}
      />
    </DropdownIndicator>
  );
};
