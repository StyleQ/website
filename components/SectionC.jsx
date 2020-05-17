import React from 'react';
import styled, { keyframes } from 'styled-components';
import Container from './Container';
import Text from './Typography';
import FormulaIcon from '../assets/icons/simple-formula.svg';
import Pin from './Pin';
import { Grid, Column } from './Grid';
import Button from './Button';

const dropExpose = keyframes`
  0%{
    transform: scale(0.9);
    opacity: .6;
  }
`;

const Root = styled.section`
  padding: 10rem 0;
  background: var(--color-brand-2);
  color: #fff;
  h4{
    color: var(--color-brand-5);
  }
  svg {
    transform-origin: center;
    animation: ${dropExpose} 1s linear infinite;
    animation-direction: alternate;
  }
  ${Grid} :first-child{
    display: flex;
    align-items: center;
  }
`;

const Video = styled.video`
  width: 100%;
  margin: 0;
  border-radius: var(--round-radius-2);
  box-shadow: 0 4.4px 12.5px rgba(0, 0, 0, 0.035),
  0 35px 100px rgba(0, 0, 0, 0.07);
  object-fit: cover;
`;

export default () => (
  <Root>
    <Container>
      <Grid columns={1}>
        <Column>
          <Pin color="var(--color-brand-5)">
            <FormulaIcon />
          </Pin>
          <Text as="h4">WE PUT THE &ldquo;S&rdquo; IN SIMPLICITY</Text>
          <Text>
            StyleQ is bridging the gap between professional stylists
            and customers. We help you find experienced, local stylists
            last minute while helping stylists fill empty chairs.
          </Text>
          <Text>
            You don't need to worry about finding a quality stylist that
            meets your unique hair needs on our platform. Clients fill out
            a survey to match them with a stylist that has expertise in
            their hair type and their desired service.
          </Text>
          <Text>
            Before booking, you can browse portfolios and reviews for
            each available stylist on our roster.
          </Text>
          <Text>
            Hectic schedules shouldn't prevent you from looking your best!
            Let StyleQ make booking your next service simple and stress-free.
          </Text>
        </Column>
      </Grid>
      <Button responsive variant="primary" as="a" href="https://app.engati.com/static/standalone/bot.html?bot_key=5e26745e9b794e60">Chat with Us</Button>
    </Container>
  </Root>
);
