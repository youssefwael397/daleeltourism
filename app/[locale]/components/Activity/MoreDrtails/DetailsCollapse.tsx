'use client';
import { Collapse } from 'antd';
import { IMoreInfoItem } from '../MoreDetails';

interface DetailsCollapseProps {
  details: IMoreInfoItem[];
}

const DetailsCollapse: React.FC<DetailsCollapseProps> = ({ details }) => {
  const items = details.map((item, index) => ({
    key: (index + 1).toString(),
    label: item.title,
    children: Array.isArray(item.description) ? (
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        {item.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    ) : (
      <p>{item.description}</p>
    ),
  }));

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} onChange={onChange} />;
};

export default DetailsCollapse;
