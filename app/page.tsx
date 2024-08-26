import CardList from '@/components/Home/CardList';
import cards from '@/data/cards';
export default function Home() {
  return (
    <main className={`container-md p-4`}>
      <CardList cardList={cards} />
    </main>
  );
}
