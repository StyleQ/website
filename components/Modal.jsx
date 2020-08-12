import React, { useState, Children } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  visibility: visible;
  
.overlay {
  position: fixed;
  display: flex;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 999;
  align-items: center;
  justify-content: center;
}
.content {
  height: 80%;
  width: 60%;
  border-radius: var(--round-radius-2);
  background-color: var(--color-brand-6);
  position: absolute;
  align-center: center;
  margin: 15% auto;
  overflow: auto;
}

span {
      color: #aaaaaa;
      position: absolute;
      font-size: 28px;
      font-weight: bold;
      top: 0.5rem;
      right: 1.5rem;
      cursor: pointer;
      :hover,
      :focus {
        color: palevioletred;
        textdecoration: none;
}`;

const Modal = (props) => {
  const { handleModal } = props;
  const { children } = props;
  const closeicon = () => (
    <span
      role="button"
      tabIndex={0}
      aria-expanded={handleModal}
      aria-controls="button"
      onClick={handleModal}
      onKeyDown={handleModal}
    >
      &times;
    </span>
  );
  return (
    <StyledModal>
      <div className="overlay">
        <div className="content">
          {closeicon()}
          {children}
        </div>
      </div>
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default Modal;
