import { ListTitleLink } from 'Atoms/links/ListTitleLink';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Cabin } from 'types/cabin';
import { ServiceType } from 'types/service';

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    height: 450px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 500px;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  max-width: 20%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    max-width: 30%;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    max-width: 50%;
    height: 40%;
    margin: 10px auto;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    max-width: 80%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const StyledP = styled(P)``;

const ContentTop = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ContentBottom = styled.div`
  margin-top: 10px;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Price = styled(P)`
  color: ${props => props.theme.colors.text.warning};
  margin-right: 10px;
`;

const Capacity = styled(P)`
  color: ${props => props.theme.colors.text.available};
`;

interface Props {
  className?: string;
  service: Cabin;
  section: ServiceType;
  showCapacity?: boolean;
}

export const ServiceListItem: FC<Props> = ({
  className,
  service,
  section,
  showCapacity = true,
}) => {
  const { t } = useTranslation();
  const locale = getLocale()?.value;
  if (!locale) {
    return <></>;
  }
  const name = locale === 'lt' ? service.nameLT : service.nameEN;
  const description = locale === 'lt' ? service.descriptionLT : service.descriptionEN;

  const trimmedDescription = description.split('.')[0];
  return (
    <Wrapper className={className}>
      <ImageWrapper>
        <Image src={service.thumbnail.imageUrl} alt="Thumbnail" />
      </ImageWrapper>
      <Content>
        <ContentTop>
          <ListTitleLink to={`/${section}/${service.id}`}>{name}</ListTitleLink>
          <StyledP>{trimmedDescription}...</StyledP>
        </ContentTop>
        <ContentBottom>
          <Price weight="700">
            {t('Price')}: {service.price} €
          </Price>
          {showCapacity && (
            <Capacity weight="700">
              {t('Capacity')}: {service.capacity}
            </Capacity>
          )}
        </ContentBottom>
      </Content>
    </Wrapper>
  );
};
