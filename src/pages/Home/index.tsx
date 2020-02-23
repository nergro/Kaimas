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
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: calc(100vh + 130px);
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: calc(100vh + 200px);
  }
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
  flex-wrap: wrap;
`;

const OverlayContentLeft = styled.div`
  width: 50%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 85px;
    text-align: center;
  }
`;

const OverlayContentRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
`;

const StyledTitle = styled(H1)`
  color: ${props => props.theme.colors.text.secondary};
  font: ${props => props.theme.fonts.HeaderBold};
  text-align: left;
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    text-align: center;
  }
`;

const StyledP = styled(P)`
  color: ${props => props.theme.colors.text.secondary};
  font: ${props => props.theme.fonts.bigTextLight};
`;

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin-top: 20px;
  align-self: center;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
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
