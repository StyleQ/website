import React from 'react';
import Layout from '../templates/Layout';
import Header from '../components/Header';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';

function Home() {
  return (
    <Layout title="Home">
      <Header />
      <SectionA />
      <SectionB />
    </Layout>
  );
}

export default Home;
