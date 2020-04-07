import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Text from './Typography';

const Root = styled.section`
  padding: 10rem 0;
  background: var(--color-brand-2);
  color: #fff;
`;

export default () => (
  <Root>
    <Container>
      <Text as="h4">WE PUT THE &ldquo;S&rdquo; IN SIMPLICITY</Text>
    </Container>
  </Root>
);
