import React, { useState } from 'react';
import InputPassword from './InputPassword';

const Password = () => {
  const [status, setStatus] = useState(false);
  const onShowClick = () => setStatus(!status);
  return (
    <InputPassword
      type={status ? 'text' : 'password'}
      onShowClick={onShowClick}
    />
  );
};

export default Password;
