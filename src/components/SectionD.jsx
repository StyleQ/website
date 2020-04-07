import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Text from './Typography';
import Divider from '../assets/divider-three.svg';

const Root = styled.section`
  position: relative;
  padding: 20rem 0 10rem;
  text-align: center;
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
      <Text as="strong" className="intro">Services we offer</Text>
      <Text as="h2">SERVING SATISFACTION AND BEYOND</Text>
    </Container>
  </Root>
);
