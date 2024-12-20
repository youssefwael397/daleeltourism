import React from 'react';
import DetailsCollapse from './MoreDrtails/DetailsCollapse';

export interface IMoreInfoItem {
  title: string;
  description: string | string[];
}

export interface IMoreDetails {
  header: string;
  descriptions: string[];
  secondHeader?: string;
  moreInfo?: IMoreInfoItem[];
}

const MoreDetails: React.FC<IMoreDetails> = ({
  header,
  secondHeader,
  descriptions,
  moreInfo,
}) => {
  return (
    <div className="container">
      <div className="d-block gap-5 justify-content-center my-5 flex-row">
        <div className="description w-100">
          <h2>{header}</h2>
          {descriptions.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        {moreInfo !== undefined ? (
          <div className="more-info w-100">
            <h2>{secondHeader}</h2>
            <DetailsCollapse details={moreInfo} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MoreDetails;
