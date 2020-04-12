import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    padding-top: .7rem;
    cursor: pointer;
    display: block;

    & span {
        background: #000000;
        display: block;
        position: relative;
        width: 3.5rem;
        height: .4rem;
        margin-bottom: .7rem;
        transition: all ease-in-out 0.2s;
    }

    .open span:nth-child(2) {
        opacity: 0;
    }

    .open span:nth-child(3) {
      transform: rotate(45deg);
      top: -11px;
    }

    .open span:nth-child(1) {
      transform: rotate(-45deg);
      top: 11px;
    }
`;

const BurgerMenu = ({ navbarState, handleNavbar }) => (
  <Wrapper onClick={handleNavbar}>
    <div className={navbarState ? 'open' : ''}>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  </Wrapper>
);

BurgerMenu.propTypes = {
  navbarState: PropTypes.bool,
  handleNavbar: PropTypes.func.isRequired,
};

BurgerMenu.defaultProps = {
  navbarState: false,
};

export default BurgerMenu;
