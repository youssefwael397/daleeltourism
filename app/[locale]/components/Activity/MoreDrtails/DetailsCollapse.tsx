'use client';
import { Collapse } from 'antd';
import { IMoreInfoItem } from '../MoreDetails';
import { Fragment } from 'react';

interface DetailsCollapseProps {
  details: IMoreInfoItem[];
}

const DetailsCollapse: React.FC<DetailsCollapseProps> = ({ details }) => {
  const items = details.map((item, index) => ({
    key: item.title,
    label: item.title,
    children: Array.isArray(item.description) ? (
      <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        {item.description.map((desc, i) => (
          <Fragment key={item.title + i}>
            <li>{desc}</li>

            {i + 1 < item.description.length ? <br /> : ''}
          </Fragment>
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
  // return (
  //   <ul>
  //     {details.map((e) => (
  //       <li key={e.title}>
  //         <strong className='fw-bold'>{e.title}</strong>
  //         <p>{e.description}</p>
  //       </li>
  //     ))}
  //   </ul>
  // );
};

export default DetailsCollapse;
