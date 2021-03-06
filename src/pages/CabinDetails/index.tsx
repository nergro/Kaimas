import { Button } from 'Atoms/buttons/Button';
import { Loader } from 'Atoms/Loader';
import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { ImageGallery } from 'Molecules/ImageGallery';
import { ServiceTabs } from 'Molecules/ServiceTabs';
import { AboutContent } from 'Molecules/tabs/AboutContent';
import { BenefitsContent } from 'Molecules/tabs/BenefitsContent';
import { ReviewsContent } from 'Molecules/tabs/ReviewsContent';
import { LoginModal } from 'Organisms/LoginModal';
import { ReservationModal } from 'Organisms/ReservationModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { getLocale } from 'services/localStorage';
import { getReservationStatus } from 'services/localStorage';
import { getAuthStatus } from 'services/localStorage';
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
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 50px 0;
  }
`;

const Title = styled(H1)`
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 16px rgba(255, 255, 255, 0.3);
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

const ReservationButton = styled(Button)`
  align-self: flex-end;
  margin: 0 40px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    align-self: center;
    margin: 20px 0 0 0;
  }
`;

interface Props extends RouteComponentProps<{ cabinId: string }> {
  loginOpen: boolean;
  setLoginOpen: (value: boolean) => void;
}

export const CabinDetails: FC<Props> = ({ match, loginOpen, setLoginOpen }) => {
  const { t } = useTranslation();
  const hasReservation = getReservationStatus('cabin');
  const isAuth = getAuthStatus();

  const [showReservationButton, setShowReservationButton] = useState<boolean>(true);
  const [reservationModalOpen, setReservationModalOpen] = useState<boolean>(false);
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
        <p>{t('Sorry! Something went wrong... :(')}</p>
      </MainLayout>
    );
  }

  const images = cabin.images.map(image => ({
    original: image.imageUrl,
    thumbnail: image.imageUrl,
  }));

  const name = locale === 'lt' ? cabin.nameLT : cabin.nameEN;
  const description = locale === 'lt' ? cabin.descriptionLT : cabin.descriptionEN;

  const onReservationButtonClick = (): void => {
    if (isAuth) {
      setReservationModalOpen(true);
    } else {
      setLoginOpen(true);
    }
  };

  const onLoginModalClose = (): void => {
    setLoginOpen(false);
  };

  return (
    <MainLayout>
      <ContentTop>
        <Title size="massive" weight="600">
          {name}
        </Title>
        {hasReservation !== undefined && !hasReservation && showReservationButton && (
          <ReservationButton onClick={onReservationButtonClick}>
            {t('Reservation')}
          </ReservationButton>
        )}
      </ContentTop>
      <ContentBottom>
        <ServiceTabs
          aboutContent={
            <AboutContent
              price={cabin.price}
              capacity={cabin.capacity}
              address={cabin.address}
              description={description}
            />
          }
          benefitsContent={<BenefitsContent benefits={cabin.benefits} />}
          reviewsContent={
            <ReviewsContent
              reviews={reviews}
              serviceId={match.params.cabinId}
              serviceType="Cabin"
            />
          }
        />
        {images.length > 0 && <Gallery images={images} />}
      </ContentBottom>
      <ReservationModal
        isOpen={reservationModalOpen}
        serviceType="Cabin"
        serviceId={match.params.cabinId}
        onClose={() => setReservationModalOpen(false)}
        price={cabin.price}
        onSuccessfullSubmit={() => setShowReservationButton(false)}
      />
      <LoginModal isOpen={loginOpen} onClose={onLoginModalClose} />
    </MainLayout>
  );
};
