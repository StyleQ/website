import React from 'react';
import styled from 'styled-components';
import Text from './Typography';
import Container from './Container';
import Button from './Button';

const Root = styled.section`
  height: 700px;
  padding: 3rem 2rem 1rem 1rem;
  background: #f9f3f8;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg clip-rule='evenodd' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 682 574' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3e9f1'%3E%3Cpath d='M618.895 0H465.646L-.003 558.455l278.618 14.91zM681.466 228.12V56.043L369.833 573.365l191.823-29.609z'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: top right;
  ${Container}{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default () => {
  return (
    <Root>
      <Container>
        <div>
          <Text as="h1">Treat Yourself.</Text>
          <Text>StyleQ helps you get quick hairstylists without long waiting schedules and we keep stylists in business with your warm presence.</Text>
          <Button variant="primary">REGISTER NOW</Button>
        </div>
        {/* <img src="https://placehold.it/200" alt="foobar" /> */}
      </Container>
    </Root>
  );
};