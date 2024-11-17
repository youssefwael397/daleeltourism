import cards from '@/data/cards';
import CardList from './components/Home/CardList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daleel Tourism',
};

const Home = () => {
  return (
    <main className={`container-md p-4`}>
      <CardList cardList={cards()} />
    </main>
  );
};

export default Home;
