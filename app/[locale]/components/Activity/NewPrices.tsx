import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

interface IPrices {
  header: string;
}

const NewPrices: React.FC<IPrices> = ({ header }) => {
  const t = useTranslations();
  return (
    <div className="container my-5">
      <div
        id="prices-container"
        className="w-50 mx-auto text-center prices-container bg-light pb-3"
      >
        <div className="header w-100 p-4 mb-3 text-center text-white">
          {t(`cards.${header}`)}
        </div>
        <div className="price-elements-container p-4">
          <div>
            <div className="d-flex align-items-baseline justify-content-center">
              <div className="icon">
                <i aria-hidden="true" className="fas fa-bus"></i>
              </div>
              <div className="title text-uppercase">Групповая или</div>
              <div className="icon ms-2">
                <i aria-hidden="true" className="fas fa-car-side"></i>
              </div>
            </div>
            <div className="title text-uppercase mb-3">
              Индивидуальная экскурсия
            </div>
            {/* changes in one page here for this section */}
            <p>
              На комфортном транспорте <br />
              <strong>350$/ МАШИНУ</strong> <br />
              Вместительность от 1-6 человек
            </p>
          </div>
          <hr />
          <div>
            <div className="d-flex align-items-baseline justify-content-center mb-3">
              <div className="icon">
                <i aria-hidden="true" className="fas fa-clock"></i>
              </div>
              <div className="title text-uppercase">
                {t('newPrices.clock_title')}
              </div>
            </div>
            {/* changes will be here for this section */}
            <p>
              4+ <span className="text-uppercase">часа</span>
            </p>
          </div>
          <hr />
          <div>
            <div className="d-flex align-items-baseline justify-content-center mb-3">
              <div className="icon">
                <i className="fa-solid fa-circle-plus"></i>
              </div>
              <div className="title text-uppercase">
                {t('newPrices.plus_title')}
              </div>
            </div>
            <ul className="plus-section-list">
              <li>Тур гид</li>
              <li>Транспорт</li>
              <li>Традиционные одеяния</li>
              <li>Арабский чай + вода</li>
              <li>Горячие местные лепёшки</li>
            </ul>
          </div>

          <hr />
          <div>
            <div className="d-flex align-items-baseline justify-content-center">
              <div className="icon">
                <i aria-hidden="true" className="fas fa-user-tie"></i>
              </div>
              <div className="title text-uppercase">
                {t('newPrices.tour_title')}
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=97460023377"
          target="_blank"
          className="order-btn btn btn-primary"
        >
          {t('buttons.order')}
        </a>
      </div>
    </div>
  );
};

export default NewPrices;
