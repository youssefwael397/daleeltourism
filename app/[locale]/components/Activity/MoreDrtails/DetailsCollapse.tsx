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
      <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        {item.description.map((desc, i) => (
          <>
            <li key={i}>{desc}</li>

            {i + 1 < item.description.length ? <br /> : ''}
          </>
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
