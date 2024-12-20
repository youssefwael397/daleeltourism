import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

interface IPrices {
  header: string;
  elements: ReactNode[];
}

const Prices: React.FC<IPrices> = ({ header, elements }) => {
  const t = useTranslations();
  return (
    <div className="container my-5">
      <div
        id="prices-container"
        className="w-50 mx-auto text-center prices-container bg-light pb-3"
      >
        <div className="header w-100 p-4 mb-3 text-center">
          {t(`cards.${header}`)}
        </div>
        <div className="price-elements-container p-4">
          {elements.map((element, index) => (
            <div key={index} className="price-element text-center">
              {index !== 0 && <hr />}
              {element}
            </div>
          ))}
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=97460023377"
          target='_blank'
          className="order-btn btn btn-primary"
        >
          {t('buttons.order')}
        </a>
      </div>
    </div>
  );
};

export default Prices;
