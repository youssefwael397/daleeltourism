import React from 'react';
import FaqsCollapse from './Faqs/FaqsCollapse';
import {
  CalendarOutlined,
  CarOutlined,
  GlobalOutlined,
  HomeOutlined,
  IdcardOutlined,
  InsuranceOutlined,
} from '@ant-design/icons';
import { useTranslations } from 'next-intl';

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

const Faqs = ({ cardUrl }: { cardUrl: string }) => {
  // Load translations
  const t = useTranslations();
  const tFaqs = useTranslations('faqs');

  // Get the specific category FAQs
  const faqCategory = tFaqs.raw(cardUrl);

  return (
    <div className="faqs-container bg-light pt-3">
      <div className="d-flex gap-5 container justify-content-center align-items-center">
        <div>
          <h2>{t('why_us.title')}</h2>
          <ul>
            <li className="d-flex align-items-center fs-5 mt-3">
              <CarOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">{t('why_us.reasons.0')}</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              <HomeOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">{t('why_us.reasons.1')}</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              <i
                className="fa-solid fa-plane me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              ></i>
              <p className="m-0">{t('why_us.reasons.2')}</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              <HomeOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">{t('why_us.reasons.3')}</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              {/* <InsuranceOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              /> */}
              <GlobalOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              />
              <p className="m-0">{t('why_us.reasons.4')}</p>
            </li>
            <li className="d-flex align-items-center fs-5 mt-3">
              {/* <InsuranceOutlined
                className="me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              /> */}
              <i
                className="fa-solid fa-tags me-4"
                style={{ fontSize: '24px', color: '#54afbe' }}
              ></i>
              <p className="m-0">{t('why_us.reasons.5')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
