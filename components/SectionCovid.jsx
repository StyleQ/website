import React from 'react';
import styled, { keyframes } from 'styled-components';
import Container from './Container';
import Text from './Typography';
import FormulaIcon from '../assets/icons/simple-formula.svg';
import Pin from './Pin';
import { Grid, Column } from './Grid';
import Button from './Button';
import CovidModal from './CovidModal';

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

const Img = styled.img`
  border-radius: var(--round-radius-2);
  width: 100%;
  object-fit: cover;
`;

export default () => (
  <Root>
    <Container>
      <Grid columns={1}>
        <Column>
          <Text as="h4">Work with the top beauty professionals in your city.</Text>
          <Text>
            <ul>
              <li>Full Background Check</li>
            </ul>
          </Text>
          <Text>
            <ul>
              <li>2+ Years Experience</li>
            </ul>
          </Text>
          <Text>
            <ul>
              <li><CovidModal /></li>
            </ul>
          </Text>
        </Column>
      </Grid>
    </Container>
  </Root>
);
