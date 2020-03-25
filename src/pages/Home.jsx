import React from 'react';
import Layout from '../templates/Layout';
import Header from '../components/Header';
import SectionA from '../components/SectionA';

function Home() {
  return (
    <Layout title="Home">
      <Header />
      <SectionA />
      <h1>Container heading</h1>
    </Layout>);
  };

export default Home;
