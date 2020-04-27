import { P } from 'Atoms/text';
import React, { FC } from 'react';
import { components, MultiValueProps, OptionTypeBase } from 'react-select';
import styled from 'styled-components/macro';

const { MultiValueLabel } = components;

const StyledP = styled(P)`
  white-space: normal;
  word-break: break-word;
`;

export const SearchSelectMultiValueLabel: FC<MultiValueProps<OptionTypeBase>> = ({
  children,
  ...props
}) => {
  return (
    <MultiValueLabel {...props}>
      <StyledP color="secondary">{children}</StyledP>
    </MultiValueLabel>
  );
};
