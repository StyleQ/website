import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Text from './Typography';

const Root = styled.section`
  padding: 10rem 0;
  background: var(--color-brand-6);
`;

export default () => (
  <Root>
    <Container>
      <Text as="h2">CUSTOMERS STAY HAPPY</Text>
      <Text>
        We build long and lasting relationships that make you want to come back.
        See what our happy customers have to say.
      </Text>
    </Container>
  </Root>
);
