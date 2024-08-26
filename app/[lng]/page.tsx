import cards from '@/data/cards';
import { useTranslation } from '@/app/i18n/index';
import { ReactElement } from 'react';
import CardList from './components/Home/CardList';

// Define type for props
interface HomeProps {
  params: {
    lng: string;
  };
}

// Since `Home` is a server component, we directly return React elements without async/await
const Home = async ({ params: { lng } }: HomeProps): Promise<ReactElement> => {
  return (
    <main className={`container-md p-4`}>
      <CardList cardList={cards} lng={lng} />
    </main>
  );
};

export default Home;
