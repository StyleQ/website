
import React from 'react';
import LogForm from '../components/LogForm';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';


const Login = () => (
  <>
    <GlobalStyle />
    <Header />
    <LogForm />
  </>
);

/*   img{
    position: relative;
    bottom: -2rem;
    @media(min-width: 720px) {
      bottom: -1rem;
    } */


export default Login;
