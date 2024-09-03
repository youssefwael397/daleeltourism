import React from 'react';
import DetailsCollapse from './MoreDrtails/DetailsCollapse';

export interface MoreInfoItem {
  title: string;
  description: string;
}

interface MoreDetailsProps {
  header: string;
  description: string;
  secondHeader?: string;
  moreInfo?: MoreInfoItem[];
}

const MoreDetails: React.FC<MoreDetailsProps> = ({
  header,
  secondHeader,
  description,
  moreInfo,
}) => {
  return (
    <div className="container">
      <div className="d-flex align-items-center gap-5">
        <div className="description w-50">
          <h2>{header}</h2>
          {description}
        </div>
        {moreInfo !== undefined ? (
          <div className="more-info w-50">
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
