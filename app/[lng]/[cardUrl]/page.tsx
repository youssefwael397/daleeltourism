import { ReactElement } from 'react';
import Link from 'next/link';
import cards from '@/data/cards';
import SingleHeader from '../components/SingleHeader';
import { CardItemType } from '../components/Home/CardItem';
import MoreDetails, { MoreInfoItem } from '../components/Activity/MoreDetails';
import Gallery from '../components/Activity/Gallery';
import Prices from '../components/Activity/Prices';
import Faqs from '../components/Activity/Faqs';
import MakeAnOrder from '../components/Activity/MakeAnOrder';
import SimilarExcursions from '../components/Activity/SimilarExcursions';

const dummyDetails: MoreInfoItem[] = [
  {
    title: 'Jeep riding',
    description:
      'Breathtaking, extreme desert jeep driving will be a wonderful experience and will give you a lot of impressions.',
  },
  {
    title: 'Photo stop in the desert',
    description:
      'The desert landscapes amaze with their picturesque expanses. We will make a stop at sunset and enjoy the view of the luminary leaning over the horizon.',
  },
  {
    title: 'Visiting the Bay',
    description:
      'This is one of the few places on the planet where the endless desert sands meet the sea - Khor Al-Adaid.',
  },
];

const CardPage = ({
  params,
}: {
  params: { cardUrl: string; lng: string };
}): ReactElement => {
  const { cardUrl, lng } = params;

  // Fetch card data on the server side
  const card = cards.find((item: CardItemType) => item.url === cardUrl);

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
        description="Desert safari always brings joy and adrenaline to all participants!

Rushing through the dunes, holding your breath on the fast take-offs and steep descents is a real pleasure for those who value active recreation.

The uniqueness of a safari in Qatar is that here you can take unique photos against the backdrop of the golden sands of the endless sea of ​​the desert."
        moreInfo={dummyDetails}
        header="Safari"
        secondHeader="Desert safari"
      />
      <Gallery />
      <Prices />
      <Faqs />
      <MakeAnOrder />
      <SimilarExcursions />
    </>
  );
};

export default CardPage;
