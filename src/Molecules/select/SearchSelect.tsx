import React, { FC } from 'react';
import ReactSelect, { ActionMeta } from 'react-select';
import styled from 'styled-components/macro';
import { SearchSelectOption } from 'types/searchSelectOption';

import { SearchSelectControl } from '../../Atoms/select/SearchSelectControl';
import { SearchSelectDropdownIndicator } from '../../Atoms/select/SearchSelectDropdownIndicator';
import { SearchSelectMenuList } from '../../Atoms/select/SearchSelectMenuList';

interface SelectProps {
  classNamePrefix?: string;
  placeholder: string;
  className?: string;
  options: SearchSelectOption[];
  value?: SearchSelectOption;
  showDropdown?: boolean;
  onChange?: (selected?: SearchSelectOption, options?: ActionMeta) => void;
  isSearchable?: boolean;
  showSearch?: boolean;
  name?: string;
  isLoading?: boolean;
}

const StyledSelect = styled(ReactSelect)`
  font: ${props => props.theme.fonts.mediumText};
  width: 100%;

  .${props => props.classNamePrefix}__control {
    background: ${props => props.theme.colors.select.localeSelect.background};
    border: none;
    border-width: 2px;
    border-radius: 10px;
    padding: 6px;
    box-shadow: none;
    transition: none;
    height: 100%;
    min-height: 44px;

    &--menu-is-open {
      border-width: 2px 2px 0px 2px;
      border-radius: 10px 10px 0 0;
      padding: 6px 12px;
      background: ${props => props.theme.colors.select.localeSelect.backgroundOpen};

      .${props => props.classNamePrefix}__dropdown-indicator {
        transform: rotate(-180deg);
      }
    }

    &:hover,
    &--is-focused,
    &--has-value,
    &--menu-is-open {
      border-color: ${props => props.theme.colors.select.localeSelect.borderColorActive};

      .${props => props.classNamePrefix}__dropdown-icon {
        fill: ${props => props.theme.colors.select.localeSelect.borderColorActive};
      }
    }
  }

  .${props => props.classNamePrefix}__dropdown-indicator {
    transition: transform 200ms ease;
    display: ${props => !props.showDropdown && 'none'};
    padding: 0;
  }

  .${props => props.classNamePrefix}__dropdown-icon {
    fill: ${props => props.theme.colors.select.localeSelect.borderColor};
  }

  .${props => props.classNamePrefix}__placeholder {
    color: ${props => props.theme.colors.select.localeSelect.placeholderColor};
  }

  .${props => props.classNamePrefix}__value-container {
    padding: 0;
    height: 100%;
  }

  .${props => props.classNamePrefix}__input {
    color: ${props => props.theme.colors.select.localeSelect.textActiveColor};
    min-height: 20px;

    & > input {
      font: ${props => props.theme.fonts.mediumTextBold};
      caret-color: ${props => props.theme.colors.select.localeSelect.textActiveColor};
    }
  }

  .${props => props.classNamePrefix}__single-value {
    color: ${props => props.theme.colors.select.localeSelect.textActiveColor};
    font: ${props => props.theme.fonts.mediumTextBold};
  }

  .${props => props.classNamePrefix}__menu {
    margin-top: 0px;
    margin-bottom: 0px;

    background-color: ${props => props.theme.colors.select.localeSelect.backgroundOpen};
    border: solid ${props => props.theme.colors.select.localeSelect.borderColorActive};
    border-width: 0 2px 2px 2px;
    border-radius: 0 0 10px 10px;
    box-shadow: none;
    overflow: hidden;
  }

  .${props => props.classNamePrefix}__menu-list {
    padding: 0;
    overflow: auto;
  }

  .${props => props.classNamePrefix}__option {
    overflow: hidden;
    color: ${props => props.theme.colors.select.localeSelect.textColor};

    &--is-focused,
    &--is-selected {
      background: rgba(127, 207, 234, 0.2);
    }

    &--is-selected {
      font: ${props => props.theme.fonts.normalTextBold};
    }
  }

  .${props => props.classNamePrefix}__indicator-separator {
    display: none;
  }

  .${props => props.classNamePrefix}__search-icon {
    display: ${props => !props.showSearch && 'none'};
  }

  .${props => props.classNamePrefix}__menu-list::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  .${props => props.classNamePrefix}__menu-list::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.scrollbar.track};
  }
  .${props => props.classNamePrefix}__menu-list::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.scrollbar.thumb};
  }
`;

export const SearchSelect: FC<SelectProps> = ({
  className,
  placeholder,
  classNamePrefix = 'search-select',
  options,
  showDropdown,
  onChange,
  value,
  isSearchable,
  showSearch,
  name,
  isLoading,
}) => {
  return (
    <StyledSelect
      className={className}
      components={{
        Control: SearchSelectControl,
        MenuList: SearchSelectMenuList,
        DropdownIndicator: SearchSelectDropdownIndicator,
      }}
      placeholder={placeholder}
      isSearchable={isSearchable}
      classNamePrefix={classNamePrefix}
      options={options}
      showDropdown={showDropdown}
      showSearch={showSearch}
      onChange={onChange}
      value={value}
      name={name}
      isLoading={isLoading}
    />
  );
};
