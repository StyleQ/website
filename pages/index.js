import Layout from '../templates/Layout';
import Header from '../components/Header';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import SectionC from '../components/SectionC';
import SectionD from '../components/SectionD';
import SectionE from '../components/SectionE';

export default function Home() {
  return (
    <Layout>
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
    </Layout>
  );
}
