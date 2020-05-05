import PropTypes from 'prop-types';
import Head from 'next/head';
import GlobalStyle from '../components/GlobalStyle';
import Footer from '../components/Footer';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="mask-icon" color="#a43f6a" href="/safari-pinned-tab.svg" />
      <link rel="manifest" crossOrigin="use-credentials" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="a43f6a" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="StyleQ connects users to beauty and wellness professionals, instantly. StyleQ empowers local salons and independent stylists to generate profitable appointments during gaps in their schedules, and allows users to book appointments on the spot." />
    </Head>
    <GlobalStyle />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: 'StyleQ - Find professional stylists'
};

export default Layout;
