import { P } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { BenefitType } from 'types/benefit';

const Wrapper = styled.div`
  /* background: whitesmoke; */
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledP = styled(P)`
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 16px rgba(255, 255, 255, 0.3);
`;

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
            <StyledP key={x.id} size="huge" weight="600">
              {isLT ? x.descriptionLT : x.descriptionEN}
            </StyledP>
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
