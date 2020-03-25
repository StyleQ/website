import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/styleq-logo.svg';
import Button from './Button';
import Container from './Container';

const Root = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  height: 8rem;
  background: #fff;
  box-shadow: 0 .2rem .2rem rgba(0,0,0,.08);
  img{
    display: block;
    width: 10rem;
  }
  > ${Container}{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  + *{
    margin-top: 6.5rem;
  }
`;

const Header = () => (
  <Root>
    <Container>
        <Link to="/"><Logo /></Link>
        <div>
          <Button>BECOME A STYLIST</Button>
          <Button as="a" rel="noopener" href="https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca">EXPLORE DEMO</Button>
          <Button variant="primary">JOIN THE WAITLIST</Button>
        </div>
    </Container>
  </Root>
);

export default Header;
