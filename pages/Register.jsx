import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header';
import SecondFooter from '../components/SecondFooter';
import GlobalStyle from '../components/GlobalStyle';

const register = () => (
  <>
    <GlobalStyle />
    <Header />
    <RegisterForm />
    <SecondFooter />
  </>
);

export default register;
