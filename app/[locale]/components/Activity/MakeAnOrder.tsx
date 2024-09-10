import {
  HourglassOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import React from 'react';

const MakeAnOrder = () => {
  return (
    <div className="w-50 mx-auto make-order-container">
      <h1 className="text-center">Make an order</h1>
      <ul>
        <li className="d-flex align-items-center fs-5 mt-3">
          <UserOutlined className="me-4" style={{ fontSize: '24px', color: '#54afbe' }} />
          <p>
            The most convenient way to make a reservation is to write to your
            hotel guide. If you do not have his contact, write to the support
            service.
          </p>
        </li>
        <li className="d-flex align-items-center fs-5 mt-3">
          <WhatsAppOutlined className="me-4" style={{ fontSize: '24px', color: '#25D366' }} />
          <p>
            <a className='text-dark text-decoration-none' href="https://api.whatsapp.com/send?phone=971528996301">
              +971528996301
            </a>
          </p>
        </li>
        <li className="d-flex align-items-center fs-5 mt-3">
          <HourglassOutlined className="me-4" style={{ fontSize: '24px', color: '#C38701' }} />
          <p>Open from 08.00 to 20.00</p>
        </li>
      </ul>
    </div>
  );
};

export default MakeAnOrder;
