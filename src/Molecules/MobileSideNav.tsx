import { LinkButton } from 'Atoms/buttons/LinkButton';
import { Link } from 'Atoms/links/Link';
import { contentClassNames, Modal } from 'Atoms/Modal';
import React, { FC } from 'react';
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
  margin: 20px 0;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
  onLoginClick(): void;
}

export const MobileSideNav: FC<Props> = ({ className, isOpen, onClose, onLoginClick }) => {
  return (
    <StyledModal className={className} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="#">Cabins</StyledLink>
        <StyledLink to="#">Activities</StyledLink>
        <StyledLink to="#">Contacts</StyledLink>
        <StyledLinkButton onClick={onLoginClick}>LOGIN</StyledLinkButton>
      </ModalContent>
    </StyledModal>
  );
};
