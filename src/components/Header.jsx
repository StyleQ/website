import React from 'react';
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

const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #000000;
    font-weight: 400;
    margin: 0 1.5rem;

    &:hover {
      border-bottom: 1px solid #000000;
    }
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

const Header = ({ navbarState, handleNavbar }) => (
  <Root>
    <Container>
      <Link to="/"><Logo /></Link>
      <NavLinks>
        <a href="/">Become a Stylist</a>
        <a href="/">Our Blog</a>
        {/* <a rel="noopener" href="https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca">EXPLORE DEMO</a> */}
        <Button variant="primary">JOIN THE WAITLIST</Button>
      </NavLinks>
      <BurgerWrapper>
        <BurgerMenu
          navbarState={navbarState}
          handleNavbar={handleNavbar}
        />
      </BurgerWrapper>
    </Container>
    <CollapseMenu
      navbarState={navbarState}
      handleNavbar={handleNavbar}
    />
  </Root>
);

Header.propTypes = {
  navbarState: PropTypes.bool,
  handleNavbar: PropTypes.func.isRequired,
};

Header.defaultProps = {
  navbarState: false,
};

export default Header;
