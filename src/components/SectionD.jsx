import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Text from './Typography';

const Root = styled.section`
  padding: 10rem 0;
`;

export default () => (
  <Root>
    <Container>
      <Text as="strong" className="intro">Services we offer</Text>
      <Text as="h2">SERVING SATISFACTION AND BEYOND</Text>
    </Container>
  </Root>
);
