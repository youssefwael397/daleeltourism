import cards from '@/data/cards';
import CardList from './components/Home/CardList';

const Home = () => {
  return (
    <main className={`container-md p-4`}>
      <CardList cardList={cards()} />
    </main>
  );
};

export default Home;
