import React, { FC } from 'react';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { BenefitType } from 'types/benefit';

const Wrapper = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

interface Props {
  className?: string;
  benefits: BenefitType[];
}

export const BenefitsContent: FC<Props> = ({ className, benefits }) => {
  const locale = getLocale()?.value;
  const isLT = locale === 'lt';
  return (
    <Wrapper className={className}>
      <List>
        {benefits.map(x => (
          <ListItem key={x.id}>{isLT ? x.descriptionLT : x.descriptionEN}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
