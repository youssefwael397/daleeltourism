'use client';

import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

export interface CardItemType {
  title: string;
  url: string;
  img: string;
}

const CardItem = ({ data }: { data: CardItemType }) => {
  return (
    <Link className="text-decoration-none" href={`/${data.url}`} passHref>
      <Card
        className="shadow w-100"
        hoverable
        // style={{ width: '100%' }}
        // eslint-disable-next-line @next/next/no-img-element
        cover={<img alt={data.title} src={data.img} />}
        bordered={true}
      >
        <Meta className="text-center fs-3 fw-bold" title={data.title} />
      </Card>
    </Link>
  );
};

export default CardItem;
