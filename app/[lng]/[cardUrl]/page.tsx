import { ReactElement } from 'react';
import Link from 'next/link';
import cards from '@/data/cards';
import SingleHeader from '../components/SingleHeader';
import { CardItemType } from '../components/Home/CardItem';
import MoreDetails, { IMoreInfoItem } from '../components/Activity/MoreDetails';
import Gallery from '../components/Activity/Gallery';
import Prices from '../components/Activity/Prices';
import Faqs from '../components/Activity/Faqs';
import MakeAnOrder from '../components/Activity/MakeAnOrder';
import SimilarExcursions from '../components/Activity/SimilarExcursions';

const CardPage = ({
  params,
}: {
  params: { cardUrl: string; lng: string };
}): ReactElement => {
  const { cardUrl, lng } = params;

  // Fetch card data on the server side
  const card = cards.find((item: CardItemType) => item.url === cardUrl);
  console.log('🚀 ~ card:', card);

  if (!card) {
    return <div>There is an unexpected error</div>;
  }

  return (
    <>
      <SingleHeader
        cardUrl={cardUrl}
        lng={lng}
        src={card.header}
        type={card.headerType}
      />
      <MoreDetails
      {...card.moreDetails}
      />
      <Gallery images={card.gallery} />
      <Prices header={cardUrl} elements={card.prices} />
      <Faqs />
      <MakeAnOrder />
      <SimilarExcursions />
    </>
  );
};

export default CardPage;
