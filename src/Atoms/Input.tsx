import { Button } from 'Atoms/buttons/Button';
import { Icon, SvgComponent } from 'Atoms/Icon';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

export const Input = styled.input`
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

const Wrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  padding: 5px 16px 0 16px;
  &:hover {
    background: ${props => props.theme.colors.button.default.backgroundColor};
    opacity: 0.9;
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.colors.button.default.textColor};
  width: 18px;
  height: 18px;
`;

interface Props {
  className?: string;
  icon: SvgComponent;
  onChange?(): void;
  onClick?(): void;
  inputType: string;
  inputName: string;
  inputPlaceholder: string;
}

export const InputWithIcon: FC<Props> = ({
  className,
  icon,
  onChange,
  onClick,
  inputType,
  inputName,
  inputPlaceholder,
}) => {
  return (
    <Wrapper className={className}>
      <Input onChange={onChange} type={inputType} name={inputName} placeholder={inputPlaceholder} />
      <StyledButton onClick={onClick}>
        <StyledIcon svgComponent={icon} />
      </StyledButton>
    </Wrapper>
  );
};
