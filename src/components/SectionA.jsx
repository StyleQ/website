import React from 'react';
import styled from 'styled-components';
import Text from './Typography';
import Container from './Container';
import Button from './Button';
import Divider from '../assets/divider-one.svg';

const Root = styled.section`
  position: relative;
  padding: 3rem 2rem 1rem 1rem;
  background: var(--color-brand-6);
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg clip-rule='evenodd' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 682 574' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3e9f1'%3E%3Cpath d='M618.895 0H465.646L-.003 558.455l278.618 14.91zM681.466 228.12V56.043L369.833 573.365l191.823-29.609z'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 300%;
  background-position: top right;
  text-align: center;
  overflow: hidden;
  ${Container} > :first-child{
    margin: 10rem 0 2rem;
  }
  p{
    max-width: 50rem;
    margin: 1rem auto 3rem;
    font-size: 2.4rem;
  }
  img{
    position: relative;
    bottom: -2rem;
    @media(min-width: 720px) {
      bottom: -1rem;
    }
  }
  > svg{
    display: none;
    @media(min-width: 720px) {
      display: block;
      position: absolute;
      left: 0;
      width: 100vw;
      bottom: -1rem;
    }
  }
  @media(min-width: 920px) {
    background-size: 90%;
    text-align: left;
    ${Container} {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default () => (
  <Root>
    <Container>
      <div>
        <Text as="h1">Treat Yourself.</Text>
        <Text>
          Have a last minute event but your stylist is booked solid?
          StyleQ has you covered by finding hair stylists near you with same-day availability.
        </Text>
        <Button responsive variant="primary">REGISTER NOW</Button>
      </div>
      <img src="https://res.cloudinary.com/strich/image/upload/v1586322560/model_ips1pp.png" alt="StyleQ Model" />
    </Container>
    <Divider />
  </Root>
);
