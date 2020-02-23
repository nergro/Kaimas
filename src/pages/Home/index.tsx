import img from 'assets/main.jpg';
import { Button } from 'Atoms/buttons/Button';
import { H1, P } from 'Atoms/text';
import { BookingTable } from 'Molecules/BookingTable';
import { Sections } from 'Molecules/Sections';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  height: 100%;
`;

const Landing = styled.div`
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
`;

const Overlay = styled.div`
  background: rgba(4, 9, 30, 0.4);
  height: 100%;
`;

const OverlayContent = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
`;

const OverlayContentLeft = styled.div`
  width: 50%;
`;

const OverlayContentRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled(H1)`
  color: ${props => props.theme.colors.text.secondary};
  font: ${props => props.theme.fonts.HeaderBold};
  text-align: left;
  margin: 0;
`;

const StyledP = styled(P)`
  color: ${props => props.theme.colors.text.secondary};
  font: ${props => props.theme.fonts.bigTextLight};
`;

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin-top: 20px;
  align-self: center;
`;

export const Home: FC = () => {
  return (
    <Wrapper>
      <Landing>
        <Overlay>
          <OverlayContent>
            <OverlayContentLeft>
              <StyledTitle>LAIKAS ATOSTOGOMS</StyledTitle>
              <StyledP>
                Nepamirštamos atostogos Lietuvos kaime. 15 nuostabių sodybų, pirtis, vandens
                dviračiai, žirgų jodinėjimas.
              </StyledP>
              <StyledButton>IEŠKOTI</StyledButton>
            </OverlayContentLeft>
            <OverlayContentRight>
              <BookingTable />
            </OverlayContentRight>
          </OverlayContent>
        </Overlay>
      </Landing>
      <Sections />
    </Wrapper>
  );
};
