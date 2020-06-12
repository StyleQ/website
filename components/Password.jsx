import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Typography';
import { TextBox } from './Forms';

const PasswordStyle = styled.input`
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

export const ShowPasswordButton = styled.button`
position: absolute;
display: block;
right: 0;
&:focus {
  outline: none;
  text-decoration: underline;
}
`;


const Password = ({ type }) => {
  const [status, setStatus] = useState({ initialState: false });
  const onShowPasswordClick = () => setStatus(!status);
  return (
    <div>
      <PasswordStyle type={type}>
        <div>
          <ShowPasswordButton type={status ? 'text' : 'password'} onShowPasswordClick={onShowPasswordClick}>
            {type === 'password' ? 'Show' : 'Hide'}
          </ShowPasswordButton>
        </div>
      </PasswordStyle>
    </div>
  );
};

Password.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Password;
