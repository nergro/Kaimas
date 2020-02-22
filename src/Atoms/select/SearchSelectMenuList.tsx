import { SearchSelectMenuSeparator } from 'Atoms/select/SearchSelectMenuSeparator';
import React, { FC } from 'react';
import { components, MenuListComponentProps, OptionTypeBase } from 'react-select';

const { MenuList } = components;

export const SearchSelectMenuList: FC<MenuListComponentProps<OptionTypeBase>> = ({
  children,
  ...props
}) => {
  return (
    <MenuList {...props}>
      <SearchSelectMenuSeparator
        className={`${props.selectProps.classNamePrefix}__menu-separator`}
      />
      {children}
    </MenuList>
  );
};
