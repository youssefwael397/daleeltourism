'use client';
import { Collapse } from 'antd';
import { FaqItem } from '../Faqs';
import React from 'react';

interface FaqsCollapseProps {
  faqs: FaqItem[];
}

const FaqsCollapse: React.FC<FaqsCollapseProps> = ({ faqs }) => {
  // Convert the dummyFaqs to the format needed for Collapse
  const items = faqs.map((faq, index) => ({
    key: (index + 1).toString(), // Use index or any unique identifier
    label: faq.q,
    children: (
      <p>
        {faq.a.split('\n').map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    ),
  }));

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} onChange={onChange} />;
};

export default FaqsCollapse;
