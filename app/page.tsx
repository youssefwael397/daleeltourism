import Image from 'next/image';
import styles from './page.module.css';
import CardItem, { CardItemType } from './components/Home/CardItem';
import CardList from './components/Home/CardList';
import cards from './data/cards';
export default function Home() {
  return (
    <main className={`${styles.main} container p-3`}>
      <CardList cardList={cards} />
    </main>
  );
}
