import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Text from './Typography';
import Divider from '../assets/divider-four.svg';
import { Grid, Column } from './Grid';
import Testimonial from './Testimonial';

const Root = styled.section`
  position: relative;
  padding: 30rem 0 15rem;
  background: var(--color-brand-6);
  overflow: hidden;
  > svg{
    position: absolute;
    top: -.1rem;
    left: 0;
    width: 100vw;
  }
  ${Column} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export default () => (
  <Root>
    <Divider />
    <Container>
      <Grid columns={2}>
        <Column>
          <Text as="h2">CUSTOMERS STAY HAPPY</Text>
          <Text>
            We build long and lasting relationships that make you want to come back.
            See what our happy customers have to say.
          </Text>
        </Column>
        <Column>
          <Testimonial />
        </Column>
      </Grid>
    </Container>
  </Root>
);
