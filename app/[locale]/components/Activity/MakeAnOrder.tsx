import {
  HourglassOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import React from 'react';

const MakeAnOrder = () => {
  const t = useTranslations();
  return (
    <div className="w-50 mx-auto make-order-container">
      <h1 className="text-center">{t('make_an_order.title')}</h1>
      <ul>
        <li className="d-flex align-items-center fs-5 mt-3">
          <UserOutlined
            className="me-4"
            style={{ fontSize: '24px', color: '#54afbe' }}
          />
          <p>{t('make_an_order.points.hotel')}</p>
        </li>
        <li className="d-flex align-items-center fs-5 mt-3">
          <WhatsAppOutlined
            className="me-4"
            style={{ fontSize: '24px', color: '#25D366' }}
          />
          <p>
            <a
              className="text-dark text-decoration-none"
              href="https://api.whatsapp.com/send?phone=971528996301"
            >
              {t('make_an_order.points.whatsapp')}
            </a>
          </p>
        </li>
        <li className="d-flex align-items-center fs-5 mt-3">
          <HourglassOutlined
            className="me-4"
            style={{ fontSize: '24px', color: '#C38701' }}
          />
          <p>{t('make_an_order.points.openning')}</p>
        </li>
      </ul>
    </div>
  );
};

export default MakeAnOrder;
