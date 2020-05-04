import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import GlobalStyle from '../components/GlobalStyle';
import Footer from '../components/Footer';

const Layout = ({ children, title='StyleQ - Find professional stylists' }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
