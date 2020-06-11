import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.button`
  position: relative;
  width: 3.5rem;
  height: 4rem;
  padding: 0;
  vertical-align: top;
  cursor: pointer;
  border: 0;
  background-color: transparent;

  span {
    display: block;
    position: relative;
    width: 100%;
    height: .4rem;
    font-size: 0;
    text-indent: -9999px;
    background: var(--color-brand-1);
    border-radius: var(--round-radius-1);
    transition: background-color .2s var(--animation-easing);
    &::before, &::after{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: .4rem;
      border-radius: var(--round-radius-1);
      background: var(--color-brand-1);
      transition: transform .3s var(--animation-easing);
    }
    &::before{
      top: -1.2rem;
      transform-origin: top left;
    }
    &::after{
      bottom: -1.2rem;
      transform-origin: bottom left;
    }
  }
  ${({ navbarOpen }) => navbarOpen && css`
    span{
      background-color: transparent;
      &::before{
        transform: rotate(45deg);
      }
      &::after{
        transform: rotate(-45deg);
      }
    }
  `}
`;

const BurgerMenu = ({ navbarState, handleNavbar }) => (
  <Wrapper aria-expanded={navbarState} aria-controls="menu" onClick={handleNavbar} navbarOpen={navbarState}>
    <span>Menu</span>
  </Wrapper>
);

BurgerMenu.propTypes = {
  navbarState: PropTypes.bool.isRequired,
  handleNavbar: PropTypes.func.isRequired,
};

export default BurgerMenu;
