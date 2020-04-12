import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollapseWrapper = styled.div`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
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
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

const CollapseMenu = ({ navbarState, handleNavbar }) => {
  if (navbarState === true) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <li><a href="/" onClick={handleNavbar}>link n2</a></li>
          <li><a href="/" onClick={handleNavbar}>link n1</a></li>
          <li><a href="/" onClick={handleNavbar}>link n3</a></li>
          <li><a href="/" onClick={handleNavbar}>link n4</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

CollapseMenu.propTypes = {
  navbarState: PropTypes.bool,
  handleNavbar: PropTypes.func.isRequired,
};

CollapseMenu.defaultProps = {
  navbarState: false,
};

export default CollapseMenu;
