import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../components/GlobalStyle';
import Footer from '../components/Footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyle />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout
