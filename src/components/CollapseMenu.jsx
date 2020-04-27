import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  background: #ffffff;
  position: fixed;
  top: 7.0rem;
  left: 0;
  right: 0;
  border-top: solid thin #eee;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: all .3s var(--animation-easing);
  ${({ navbarOpen }) => navbarOpen && css`
    opacity: 1;
    transform: scaleY(1);
  `}
  a {
    display: block;
    padding: 2rem;
    transition: background-color .2s ease;
    &:hover {
      background-color: #f4f4f4;
    }
  }
`;

const CollapseMenu = ({ navbarState }) => (
  <Nav navbarOpen={navbarState} id="menu">
    <a href="/">Become a Stylist</a>
    <a href="https://blog.bookstyleq.com">Our Blog</a>
    <a href="https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca">Get Started</a>
  </Nav>
);

CollapseMenu.propTypes = {
  navbarState: PropTypes.bool.isRequired,
};

export default CollapseMenu;
