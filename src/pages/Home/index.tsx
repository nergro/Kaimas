import React from 'react';
import img from 'assets/main.jpg';
import styled from 'styled-components';
import { H1, P } from 'Atoms/text';
import { Button } from 'Atoms/buttons/Button';
import { Tab } from 'Atoms/buttons/Tab';

const Wrapper = styled.div`
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

const Content = styled.div``;

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin-top: 20px;
`;

const Tabs = styled.div`
  display: flex;
`;

const StyledTab = styled(Tab)``;

const BookingTable = styled.div`
  width: 55%;
`;

const Form = styled.form`
  background: ${props => props.theme.colors.background.primary};
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  margin-top: 10px;
  &:first-child {
    margin: 0;
  }

  width: 100%;
  padding: 12px;
  font: ${props => props.theme.fonts.smallTextLight};
  border: 1px solid ${props => props.theme.colors.input.border};
  color: ${props => props.theme.colors.input.text};
  background: ${props => props.theme.colors.input.background};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  &:focus {
    border-color: ${props => props.theme.colors.input.borderFocus};
  }
`;

export const Home = () => {
  return (
    <Wrapper>
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
            <BookingTable>
              <Tabs>
                <StyledTab active>Places</StyledTab>
                <StyledTab>Activities</StyledTab>
              </Tabs>
              <Form>
                <Input type="text" name="from" placeholder="From" />
                <Input type="text" name="to" placeholder="To" />
                <Input type="text" name="Start" placeholder="Start" />
                <Input type="text" name="Return" placeholder="Return" />
                <Input type="text" name="Adults" placeholder="Adults" />
                <Input type="text" name="Child" placeholder="Child" />
                <StyledButton>SEARCH</StyledButton>
              </Form>
            </BookingTable>
          </OverlayContentRight>
        </OverlayContent>
      </Overlay>
      <Content>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
      </Content>
    </Wrapper>
  );
};
