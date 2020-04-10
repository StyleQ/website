import React from 'react';
import Layout from '../templates/Layout';
import Header from '../components/Header';
import SectionA from '../components/SectionA';
import Service from '../components/Service';


function Home() {
  return (
    <Layout title="Home">
      <Header />
      <SectionA />
      <Service name="NATURAL HAIR" image="feature1.jpg" />
      <h1>Container heading</h1>
    </Layout>);
  };

export default Home;
