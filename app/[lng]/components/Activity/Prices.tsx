import React, { ReactNode } from 'react';

interface IPrices {
  header: string;
  elements: ReactNode[];
}



const Prices: React.FC<IPrices> = ({ header, elements }) => {
  return (
    <div className="container my-5">
      <div className="w-25 mx-auto text-center prices-container pb-3">
        <div className="header w-100 p-4 mb-3 text-center">{header}</div>
        <div className="price-elements-container p-4">
          {elements.map((element, index) => (
            <div key={index} className="price-element text-center">
              {index !== 0 && <hr />}
              {element}
            </div>
          ))}
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=97470820639"
          className="order-btn btn btn-primary"
        >Order</a>
      </div>
    </div>
  );
};

export default Prices;
