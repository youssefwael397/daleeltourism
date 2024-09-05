import React, { ReactNode } from 'react';

interface IPrices {
  header: string;
  elements: ReactNode[];
}



const Prices: React.FC<IPrices> = ({ header, elements }) => {
  return (
    <div className="container">
      <div className="w-50 mx-auto text-center">
        <div className="header w-100 p-4 bg-primary text-center">{header}</div>
        <div className="price-elements-container">
          {elements.map((element, index) => (
            <div key={index} className="price-element text-center">
              {index !== 0 && <hr />}
              {element}
            </div>
          ))}
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=97470820639"
          className="btn btn-primary"
        >Order</a>
      </div>
    </div>
  );
};

export default Prices;
