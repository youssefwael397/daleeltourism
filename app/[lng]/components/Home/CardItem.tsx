'use client';

import { useTranslation } from '@/app/i18n';
import { Card } from 'antd';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
import { IMoreDetails } from '../Activity/MoreDetails';
import { IGallery, IImage } from '../Activity/Gallery';

const { Meta } = Card;

export interface CardItemType {
  title: string;
  url: string;
  img: string;
  header: string;
  headerType: 'img' | 'vid';
  moreDetails: IMoreDetails;
  gallery: IImage[];
  prices: JSX.Element[];
}

const CardItem = async ({
  data,
  lng,
}: {
  data: CardItemType;
  lng: string;
}): Promise<ReactElement> => {
  const { t } = await useTranslation(lng, 'cards');

  return (
    <Link href={`/${data.url}`} passHref className="text-decoration-none">
      <Card
        className="shadow w-100"
        hoverable
        cover={<img alt={data.title} src={data.img} />}
        bordered
      >
        <Meta className="text-center fs-3 fw-bold" title={t(data.title)} />
      </Card>
    </Link>
  );
};

export default CardItem;
