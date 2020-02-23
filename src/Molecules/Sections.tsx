import HorseImage from 'assets/cards/horse.jpg';
import HouseImage from 'assets/cards/house.jpg';
import LakeImage from 'assets/cards/lake.jpg';
import { SectionCard } from 'Atoms/SectionCard';
import { H1 } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  margin-top: 120px;
`;

const StyledH1 = styled(H1)`
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
  font: ${props => props.theme.fonts.SectionHeaderBold};
  background: linear-gradient(
    to right,
    rgba(248, 182, 0, 1) 0%,
    rgba(248, 182, 0, 1) 26%,
    rgba(246, 41, 12, 1) 97%,
    rgba(241, 111, 92, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSection = styled(SectionCard)`
  &:first-child {
    margin: 0;
  }
  margin-top: 40px;
`;

export const Sections: FC = () => {
  return (
    <Wrapper>
      <StyledH1>Poilsis gamtoje</StyledH1>
      <StyledSection
        title="Apgyvendinimas"
        description="Geriausias poilsis tik tikroje lietuviškoje gamtoje. Mūsų komfortabilios sodybos įrengtos puikioje vietoje. Viskas tobulam Jūsų poilsiui!"
        path="#"
        image={HouseImage}
      />
      <StyledSection
        title="Vandens pramogos"
        description="Geriausias poilsis tik tikroje lietuviškoje gamtoje. Mūsų komfortabilios sodybos įrengtos puikioje vietoje. Viskas tobulam Jūsų poilsiui!"
        path="#"
        image={LakeImage}
        toRight
      />
      <StyledSection
        title="Jodinėjimas žirgais"
        description="Geriausias poilsis tik tikroje lietuviškoje gamtoje. Mūsų komfortabilios sodybos įrengtos puikioje vietoje. Viskas tobulam Jūsų poilsiui!"
        path="#"
        image={HorseImage}
      />
    </Wrapper>
  );
};
