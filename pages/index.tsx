import { FC } from 'react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

const Home: FC = () => {
  return (
    <>
      <Header isInner={false} />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
