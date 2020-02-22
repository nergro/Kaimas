import { Modal } from 'Atoms/Modal';
import { SearchBar } from 'Molecules/SearchBar';
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const StyledModal = styled(Modal)`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const SearchBarModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <SearchBar />
    </StyledModal>
  );
};
