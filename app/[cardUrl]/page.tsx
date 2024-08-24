// app/[cardUrl]/page.tsx
'use client'; // Ensure this is a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import cards from '@/app/data/cards'; // Adjust the import path as needed

export interface CardItemType {
  title: string;
  url: string;
  img: string;
}

const CardPage = ({ params }: { params: { cardUrl: string } }) => {
  const { cardUrl } = params;
  const [card, setCard] = useState<CardItemType | undefined>();

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const found = cards.find((item: CardItemType) => item.url === cardUrl);
    setCard(found);
  }, [cardUrl]);

  if (!card) return <div>There is an unexpected error</div>;

  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.url}</p>
      <img src={card.img} alt={card.title} />
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default CardPage;
