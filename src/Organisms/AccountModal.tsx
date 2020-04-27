import { Button } from 'Atoms/buttons/Button';
import { Modal } from 'Atoms/Modal';
import { H1 } from 'Atoms/text';
import { ChangePasswordModal } from 'Organisms/ChangePasswordModal';
import { OrdersModal } from 'Organisms/OrdersModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAuthStatus } from 'services/localStorage';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
}

export const AccountModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const { t } = useTranslation();
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);

  const isAuth = getAuthStatus();
  if (!isAuth) {
    onClose();
    return <></>;
  }

  const onOrdersOpen = (): void => {
    onClose();
    setOrdersOpen(true);
    setPasswordOpen(false);
  };

  const onPasswordOpen = (): void => {
    onClose();
    setPasswordOpen(true);
    setOrdersOpen(false);
  };
  console.log(passwordOpen);

  return (
    <>
      <Modal className={className} isOpen={isOpen} onClose={onClose}>
        <H1 uppercase>{t('Account')}</H1>

        <Wrapper>
          <StyledButton onClick={onOrdersOpen}>{t('Orders')}</StyledButton>
          <StyledButton onClick={onPasswordOpen}>{t('Change password')}</StyledButton>
        </Wrapper>
      </Modal>
      <OrdersModal isOpen={ordersOpen} onClose={() => setOrdersOpen(false)} />
      <ChangePasswordModal isOpen={passwordOpen} onClose={() => setPasswordOpen(false)} />
    </>
  );
};
