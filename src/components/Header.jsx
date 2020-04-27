import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/styleq-logo.svg';
import Button from './Button';
import Container from './Container';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

const Root = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  padding: 1.5rem 0;
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
  svg{
    width: 10rem;
    vertical-align: middle;
  }
  a,button{
    margin: 0;
  }
`;

const Nav = styled.nav`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  a {
    margin: 0 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [navBarOpen, setnavBarOpen] = useState(false);
  const handleNavbar = () => setnavBarOpen(!navBarOpen);

  return (
    <Root>
      <Container>
        <Link to="/"><Logo /></Link>
        <Nav role="navigation">
          <a href="https://styleqpro.typeform.com/to/fR7u79">Become a Stylist</a>
          <a href="https://blog.bookstyleq.com">Our Blog</a>
          <Button variant="primary" as="a" href="https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca">Get started</Button>
        </Nav>
        <BurgerWrapper>
          <BurgerMenu
            navbarState={navBarOpen}
            handleNavbar={handleNavbar}
          />
        </BurgerWrapper>
      </Container>
      <CollapseMenu
        navbarState={navBarOpen}
        handleNavbar={handleNavbar}
      />
    </Root>
  );
};

export default Header;
