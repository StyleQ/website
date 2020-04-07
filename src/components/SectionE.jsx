import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Text from './Typography';
import Divider from '../assets/divider-four.svg';

const Root = styled.section`
  position: relative;
  padding: 25rem 0 10rem;
  background: var(--color-brand-6);
  > svg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
  }
`;

export default () => (
  <Root>
    <Divider />
    <Container>
      <Text as="h2">CUSTOMERS STAY HAPPY</Text>
      <Text>
        We build long and lasting relationships that make you want to come back.
        See what our happy customers have to say.
      </Text>
    </Container>
  </Root>
);
