import { Button } from 'Atoms/buttons/Button';
import { ServiceListItem } from 'Atoms/ServiceListItem';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Cabin } from 'types/cabin';
import { ServiceType } from 'types/service';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledService = styled(ServiceListItem)`
  margin-top: 20px;
  &:first-child {
    margin: 0;
  }
`;

const MoreButton = styled(Button)`
  margin-top: 20px;
`;

interface Props {
  className?: string;
  services: Cabin[];
  section: ServiceType;
}

export const ServiceList: FC<Props> = ({ className, services, section }) => {
  const { t } = useTranslation();
  const [servicesToShow, setServicesToShow] = useState<number>(8);
  return (
    <Wrapper className={className}>
      <List>
        {services.slice(0, servicesToShow).map(service => (
          <StyledService key={service.id} service={service} section={section} />
        ))}
      </List>
      {servicesToShow < services.length && (
        <MoreButton onClick={() => setServicesToShow(servicesToShow + 8)} outline>
          {t('Show More')}
        </MoreButton>
      )}
    </Wrapper>
  );
};
