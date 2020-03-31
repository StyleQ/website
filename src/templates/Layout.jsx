import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../components/GlobalStyle';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
