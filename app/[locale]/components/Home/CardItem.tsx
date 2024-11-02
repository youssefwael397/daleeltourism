'use client';

import { Card } from 'antd';
import { ReactElement } from 'react';
import { IMoreDetails } from '../Activity/MoreDetails';
import { IImage } from '../Activity/Gallery';
import { Link } from '@/navigation';

const { Meta } = Card;

export interface CardItemType {
  title: string;
  subTitle: string;
  url: string;
  img: string;
  header: string;
  headerType: 'img' | 'vid';
  moreDetails: IMoreDetails;
  gallery: IImage[];
  prices: JSX.Element[];
  newPrices?: JSX.Element[];
}

const CardItem = ({
  data,
}: {
  data: CardItemType;
}): ReactElement => {
  return (
    <Link href={`/${data.url}`} passHref className="text-decoration-none">
      <Card
        className="shadow w-100"
        hoverable
        cover={<img alt={data.title} src={data.img} />}
        bordered
      >
        <Meta className="text-center fs-3 fw-bold" title={data.title} />
      </Card>
    </Link>
  );
};

export default CardItem;
