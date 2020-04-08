import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Root = styled.div`
  align-self: center;
  width: 8rem;
  height: 8rem;
  margin: 2rem 0;
  border-radius: 50%;
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
  color: PropTypes.string.isRequired,
};

export default Pin;
