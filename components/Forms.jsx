import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextBoxStyle = styled.input`
  height: 4rem;
  padding: 1rem;
  border: solid thin var(--color-brand-1);
  border-radius: var(--round-radius-1);
  background: #fff;
  &:focus{
    box-shadow: 0 0 .3rem var(--color-focus);
  }
  ${({ display }) => display === 'block' && css`
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
  `}
`;

export const TextBox = ({ type = 'text' }) => (
  <TextBoxStyle type={type} />
);

TextBox.propTypes = {
  type: PropTypes.string.isRequired,
};

export const TextArea = styled.textarea``;

export const Checkbox = styled.input``;

export const Radio = styled.input``;

const LabelStyle = styled.label`
  ${({ variant }) => variant === 'wrapper' && css`
    display: block;
    position: relative;
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    input{
      width: 100%;
      box-shadow: .2rem .5rem .4rem 0 rgba(0,0,0,.04),
                  .2rem .5rem .5rem 0 rgba(0,0,0,.12);
      padding-right: 40%;
    }
  `}
`;

export const Label = ({ variant = 'default', ...props }) => (
  <LabelStyle variant={variant} />
);

Label.propTypes = {
  variant: PropTypes.string.isRequired,
};
