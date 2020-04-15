import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollapseWrapper = styled.div`
  background: #ffffff;
  position: fixed;
  top: 7.0rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #000000;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid #000000;
    }
  }
`;

const CollapseMenu = ({ navbarState, handleNavbar }) => {
  if (navbarState === true) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <li><a href="/" onClick={handleNavbar}>Become a Stylist</a></li>
          <li><a href="/" onClick={handleNavbar}>Our Blog</a></li>
          <li><a href="/" onClick={handleNavbar}>Join the Waitlist</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

CollapseMenu.propTypes = {
  navbarState: PropTypes.bool.isRequired,
  handleNavbar: PropTypes.func.isRequired,
};

export default CollapseMenu;
