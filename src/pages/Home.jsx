import React from 'react';
import Layout from '../templates/Layout';
import Header from '../components/Header';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import SectionC from '../components/SectionC';
import SectionD from '../components/SectionD';
import SectionE from '../components/SectionE';

function Home() {
  return (
    <Layout title="Home">
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
    </Layout>
  );
}

export default Home;
