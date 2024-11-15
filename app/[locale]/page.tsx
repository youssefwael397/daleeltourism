import cards from '@/data/cards';
import CardList from './components/Home/CardList';
import Head from 'next/head';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daleel Tourism',
};

const Home = () => {
  return (
    <main className={`container-md p-4`}>
      <Head>
        <title>Daleel Tourism</title>
      </Head>

      <CardList cardList={cards()} />
    </main>
  );
};

export default Home;
