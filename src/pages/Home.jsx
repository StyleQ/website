import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../templates/Layout';
import Header from '../components/Header';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import SectionC from '../components/SectionC';
import SectionD from '../components/SectionD';
import SectionE from '../components/SectionE';

function Home({ navbarState, handleNavbar }) {
  return (
    <Layout title="Home">
      <Header>
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      </Header>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
    </Layout>
  );
}


Home.propTypes = {
  navbarState: PropTypes.bool,
  handleNavbar: PropTypes.func.isRequired,
};

Home.defaultProps = {
  navbarState: false,
};

export default Home;
