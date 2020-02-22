import React from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';

export type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;
interface Props {
  className?: string;
  fill?: keyof DefaultTheme['colors']['text'];
  svgComponent: SvgComponent;
}

const IconComp: React.FC<Props> = ({ className, svgComponent: SvgComponent }) => {
  return <SvgComponent className={className} />;
};

export const Icon = styled(IconComp)`
  ${props => (props.fill ? `fill: ${props.theme.colors.text[props.fill]};` : '')}
  height: 100%;
  width: 100%;
`;
