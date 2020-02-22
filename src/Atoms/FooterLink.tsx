import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface FooterLinkProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

const Link = styled.a`
  cursor: pointer;
  font: ${props => props.theme.fonts.smallText};
  line-height: 20px;
  text-decoration: none;
  display: inline-block;
`;

export const FooterLink: FC<FooterLinkProps> = ({ label, href, onClick }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {label}
    </Link>
  );
};
