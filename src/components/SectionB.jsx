import React from 'react';
import styled from 'styled-components';
import Text from './Typography';
import Container from './Container';

const Root = styled.section`
  padding: 3rem 0;
  text-align: center;
  .intro{
    color: var(--color-brand-4);
    font-size: 1.7rem;
  }
`;

export default () => (
  <Root>
    <Container>
      <Text as="strong" className="intro">How it works</Text>
      <Text as="h2">WHERE THE MAGIC HAPPENS</Text>
      Stuff here
    </Container>
  </Root>
);
