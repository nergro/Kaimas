import { LinkButton } from 'Atoms/buttons/LinkButton';
import { Link } from 'Atoms/links/Link';
import { contentClassNames, Modal } from 'Atoms/Modal';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const StyledModal = styled(Modal)`
  .${contentClassNames.base} {
    background: ${props => props.theme.colors.background.mobileDrawer};
    width: 100%;
    position: absolute;
    top: 0;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-top: 20px;
  &:last-child {
    margin-bottom: 20px;
  }
`;

interface Props {
  className?: string;
  isOpen: boolean;
  isAuth?: boolean;
  onClose(): void;
  onLogout(): void;
  onLogin(): void;
  onAccount(): void;
}

export const MobileSideNav: FC<Props> = ({
  className,
  isOpen,
  onClose,
  onLogin,
  isAuth,
  onLogout,
  onAccount,
}) => {
  const { t } = useTranslation();

  return (
    <StyledModal className={className} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <StyledLink to="/">{t('Home')}</StyledLink>
        <StyledLink to="/cabins">{t('Cabins')}</StyledLink>
        <StyledLink to="/activities">{t('Activities')}</StyledLink>
        {isAuth && <StyledLinkButton onClick={onAccount}>{t('Account')}</StyledLinkButton>}
        {!isAuth && <StyledLinkButton onClick={onLogin}>{t('Login')}</StyledLinkButton>}
        {isAuth && <StyledLinkButton onClick={onLogout}>{t('Logout')}</StyledLinkButton>}
      </ModalContent>
    </StyledModal>
  );
};
