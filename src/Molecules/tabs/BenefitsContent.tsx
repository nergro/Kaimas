import React, { FC } from 'react';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { BenefitType } from 'types/benefit';
import { P } from 'Atoms/text';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

interface Props {
  className?: string;
  benefits: BenefitType[];
}

export const BenefitsContent: FC<Props> = ({ className, benefits }) => {
  const { t } = useTranslation();

  const locale = getLocale()?.value;
  const isLT = locale === 'lt';
  return (
    <Wrapper className={className}>
      {benefits.length > 0 ? (
        <List>
          {benefits.map(x => (
            <ListItem key={x.id}>{isLT ? x.descriptionLT : x.descriptionEN}</ListItem>
          ))}
        </List>
      ) : (
        <P size="big" weight="600">
          {t('List of benefits is empty')}
        </P>
      )}
    </Wrapper>
  );
};
