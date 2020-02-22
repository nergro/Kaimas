import { ReactComponent as SearchIcon } from 'assets/Search.svg';
import { Icon } from 'Atoms/Icon';
import React, { FC } from 'react';
import { components, ControlProps, OptionTypeBase } from 'react-select';
import styled from 'styled-components/macro';

const { Control } = components;

const StyledIcon = styled(Icon)`
  height: 18px;
  width: 18px;
  margin-right: 23px;
`;

export const SearchSelectControl: FC<ControlProps<OptionTypeBase>> = props => {
  return (
    <Control
      {...props}
      className={props.hasValue ? `${props.selectProps.classNamePrefix}__control--has-value` : ''}
    >
      <StyledIcon
        svgComponent={SearchIcon}
        className={`${props.selectProps.classNamePrefix}__search-icon`}
      />
      {props.children}
    </Control>
  );
};
