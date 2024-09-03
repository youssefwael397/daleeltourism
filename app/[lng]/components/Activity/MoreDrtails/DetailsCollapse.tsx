'use client';
import { Collapse } from 'antd';
import { MoreInfoItem } from '../MoreDetails';

interface DetailsCollapseProps {
  details: MoreInfoItem[];
}

const DetailsCollapse: React.FC<DetailsCollapseProps> = ({ details }) => {
  const items = details.map((item, index) => ({
    key: (index + 1).toString(),
    label: item.title,
    children: <p>{item.description}</p>,
  }));

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} onChange={onChange} />
  );
};

export default DetailsCollapse;
