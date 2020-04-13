import { IncreaseButton } from 'Atoms/buttons/IncreaseButton';
import { Input } from 'Atoms/Input';
import { H3 } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { CapacityFilterType, PriceFilterType } from 'types/Cabin';

const Wrapper = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.background.primary};
  padding: 30px 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled(H3)`
  text-align: left;
  margin: 10px 0 0 0;
  &:first-child {
    margin: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    text-align: center;
  }
`;

const StyledInput = styled(Input)`
  margin-top: 10px;
`;

export const NumberInputWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    /* width: 30%; */
  }
`;

export const NumberInput = styled(Input)`
  margin: 0 20px;
  text-align: center;
  font: ${props => props.theme.fonts.bigTextBold};
  color: ${props => props.theme.colors.text.available};
`;

export const PriceInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  ${NumberInput} {
    margin: 0 10px 0 0;
    font: ${props => props.theme.fonts.mediumText};
  }
`;

interface Props {
  className?: string;
  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void;
  capacityValue: number;
  onCapacityChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onCapacityButtonClick(action: CapacityFilterType): void;
  onPriceChange(e: React.ChangeEvent<HTMLInputElement>, input: PriceFilterType): void;
}

export const CabinListFilter: FC<Props> = ({
  onSearchChange,
  capacityValue,
  onCapacityChange,
  onCapacityButtonClick,
  onPriceChange,
}) => {
  return (
    <Wrapper>
      <InputLabel weight="500">Paieška</InputLabel>
      <StyledInput
        type="text"
        name="SearchTitle"
        placeholder="Įveskite pavadinimą"
        onChange={onSearchChange}
      />
      <InputLabel weight="500">Vietų skaičius</InputLabel>
      <NumberInputWrapper>
        <IncreaseButton onClick={() => onCapacityButtonClick('decrease')}>-</IncreaseButton>
        <NumberInput
          type="number"
          name="capacity"
          value={capacityValue}
          onChange={onCapacityChange}
        />
        <IncreaseButton onClick={() => onCapacityButtonClick('increase')}>+</IncreaseButton>
      </NumberInputWrapper>
      <InputLabel weight="500">Kaina</InputLabel>
      <PriceInputWrapper>
        <NumberInput
          type="number"
          name="capacity"
          placeholder="Nuo"
          onChange={e => onPriceChange(e, 'start')}
        />
        <NumberInput
          type="number"
          name="capacity"
          placeholder="Iki"
          onChange={e => onPriceChange(e, 'end')}
        />
      </PriceInputWrapper>
    </Wrapper>
  );
};
