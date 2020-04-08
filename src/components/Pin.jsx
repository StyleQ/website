import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Root = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  margin: 2rem 0;
  border-radius: 50%;
  svg{
    width: 4.5rem;
    vertical-align: middle;
    fill: #fff;
  }
  ${({ bg }) => bg && css`
    background: ${bg};
  `}
`;

const Pin = ({ children, color = 'var(--color-brand-4)' }) => (
  <Root bg={color}>
    {children}
  </Root>
);

Pin.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Pin.defaultProps = {
  color: 'var(--color-brand-4)',
};

export default Pin;
