import React from 'react';
import FaqsCollapse from './Faqs/FaqsCollapse';
import { CalendarOutlined, CarOutlined, HomeOutlined, IdcardOutlined, InsuranceOutlined } from '@ant-design/icons';

export interface FaqItem {
  q: string;
  a: string;
}

const dummyFaqs: FaqItem[] = [
  {
    q: 'Will it be possible to take a ride behind the wheel of a jeep?',
    a: 'For safety reasons, guests are not allowed to drive a jeep during the safari. You will be served by a professional driver.',
  },
  {
    q: 'Is it possible to choose the seat in the car?',
    a: 'Yes, sure.',
  },
  {
    q: 'What is the best way to dress for a safari?',
    a: 'Dress code: sportswear, comfortable. Due to the possible decrease in air temperature in the desert at night, we recommend having warm clothes with you.',
  },
];

const Faqs = () => {
  return (
    <div className="bg-light">
      <div className="d-flex gap-5 container">
        <div className="w-50">
          <h2>Frequently Asked Questions</h2>
          <FaqsCollapse faqs={dummyFaqs} />
        </div>
        <div>
          <h2>Why with us?</h2>
          <ul>
            <li className="d-flex align-items-center fs-5 mt-3">
              <CalendarOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">Legal entity with 24 years of experience</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              <CarOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">Own fleet of vehicles</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              <IdcardOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">Staff of licensed guides</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              <HomeOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">Pick up at any hotel</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              <InsuranceOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">Legal and insured</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
