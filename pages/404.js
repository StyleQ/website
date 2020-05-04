import React from 'react';
import Layout from '../templates/Layout';
import Header from '../components/Header';

const Custom404 = () => (
  <Layout title="404 - This page was not found">
    <Header />
    <h1 style={{ marginTop: '10rem' }}>NOT FOUND</h1>
    <p>This page does not exist</p>
  </Layout>
);

export default Custom404;
