import { ButtonLink } from 'Atoms/links/ButtonLink';
import { Loader } from 'Atoms/Loader';
import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { ImageGallery } from 'Molecules/ImageGallery';
import { ServiceTabs } from 'Molecules/ServiceTabs';
import { AboutContent } from 'Molecules/tabs/AboutContent';
import { BenefitsContent } from 'Molecules/tabs/BenefitsContent';
import { ReviewsContent } from 'Molecules/tabs/ReviewsContent';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { getLocale } from 'services/localStorage';
import { useCabinsResource } from 'store/cabinsStore/hooks';
import { useReviews } from 'store/reviewsStore/hooks';
import { assetIsNotStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';
import { Cabin } from 'types/cabin';

const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBottom = styled.div`
  padding: 50px 40px;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`;

const Title = styled(H1)`
  margin-bottom: 10px;
`;

const Gallery = styled(ImageGallery)`
  width: 50%;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 1;
    width: 90%;
    margin: 0 auto;
  }
`;

const ReservationButton = styled(ButtonLink)`
  align-self: flex-end;
  margin: 0 40px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    align-self: center;
    margin: 20px 0 0 0;
  }
`;

export const CabinDetails: FC<RouteComponentProps<{ cabinId: string }>> = ({ match }) => {
  const { t } = useTranslation();
  const cabinsResource = useCabinsResource();
  const reviews = useReviews(match.params.cabinId);

  const locale = getLocale()?.value;

  assetIsNotStoreError(cabinsResource);
  assetIsNotStoreError(reviews);

  if (isLoading(cabinsResource) || isLoading(reviews)) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  const cabin: Cabin | undefined = cabinsResource.find(cabin => cabin.id === match.params.cabinId);

  if (!cabin) {
    return (
      <MainLayout>
        <p>{'Sorry! Something went wrong... :('}</p>
      </MainLayout>
    );
  }

  const images = cabin.images.map(image => ({
    original: image.imageUrl,
    thumbnail: image.imageUrl,
  }));

  const name = locale === 'lt' ? cabin.nameLT : cabin.nameEN;
  const description = locale === 'lt' ? cabin.descriptionLT : cabin.descriptionEN;

  return (
    <MainLayout>
      <ContentTop>
        <Title size="big" weight="600">
          {name}
        </Title>
        <ReservationButton to={`/cabins/${match.params.cabinId}/reservation`}>
          {t('Reservation')}
        </ReservationButton>
      </ContentTop>
      <ContentBottom>
        <ServiceTabs
          aboutContent={<AboutContent text={description} />}
          benefitsContent={<BenefitsContent benefits={cabin.benefits} />}
          reviewsContent={
            <ReviewsContent
              reviews={reviews}
              serviceId={match.params.cabinId}
              serviceType="Cabin"
            />
          }
        />
        <Gallery images={images} />
      </ContentBottom>
    </MainLayout>
  );
};
