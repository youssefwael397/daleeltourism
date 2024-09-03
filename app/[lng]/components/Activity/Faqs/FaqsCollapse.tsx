'use client';
import { Collapse } from 'antd';
import { FaqItem } from '../Faqs';

interface FacsCollapseProps {
  faqs: FaqItem[];
}

const FaqsCollapse: React.FC<FacsCollapseProps> = ({ faqs }) => {
  // Convert the dummyFaqs to the format needed for Collapse
  const items = faqs.map((faq, index) => ({
    key: (index + 1).toString(), // Use index or any unique identifier
    label: faq.q,
    children: <p>{faq.a}</p>,
  }));

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} onChange={onChange} />;
};

export default FaqsCollapse;
