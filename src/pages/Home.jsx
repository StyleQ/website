import React from 'react';
import Layout from '../templates/Layout';
import Header from '../components/Header';
import SectionA from '../components/SectionA';



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
