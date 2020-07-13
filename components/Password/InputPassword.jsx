import React from 'react';
import propTypes from 'prop-types';
import Container from '../Container';
import { TextBox, Label } from '../Forms';
import Button from '../Button';


const InputPassword = ({ type, onShowClick }) => (
  <div>
    <Container style={{ margin: '0rem', width: '30rem' }}>
      <Label variant="wrapper">
        <TextBox name="Password" placeholder="password" type={type} required />
        <Button variant="wrapped" onClick={onShowClick}>{type === 'password' ? 'Show' : 'Hide'}</Button>
      </Label>
    </Container>
  </div>
);

InputPassword.propTypes = {
  type: propTypes.string.isRequired,
  onShowClick: propTypes.string.isRequired,
};

export default InputPassword;
