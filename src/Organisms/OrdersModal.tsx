import { contentClassNames, Modal } from 'Atoms/Modal';
import { Order } from 'Atoms/Order';
import { H1, P } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getAuthStatus } from 'services/localStorage';
import { useOrdersList } from 'store/ordersStore/hooks';
import styled from 'styled-components/macro';

const StyledModal = styled(Modal)`
  .${contentClassNames.base} {
    max-width: 45%;
  }
`;

const Wrapper = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: auto;
`;

const StyledOrder = styled(Order)`
  margin-bottom: 15px;
`;

const NoOrdersWrapper = styled.div`
  padding: 50px 0;
  text-align: center;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
}

export const OrdersModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const { t } = useTranslation();
  const orders = useOrdersList();
  const isAuth = getAuthStatus();
  if (!isAuth) {
    onClose();
    return <></>;
  }

  return (
    <StyledModal className={className} isOpen={isOpen} onClose={onClose}>
      <H1 uppercase>{t('Orders')}</H1>

      <Wrapper>
        {orders.length > 0 ? (
          orders.map(order => <StyledOrder key={order.id} order={order} />)
        ) : (
          <NoOrdersWrapper>
            <P size="big">{t('No orders yet')}</P>
          </NoOrdersWrapper>
        )}
      </Wrapper>
    </StyledModal>
  );
};
