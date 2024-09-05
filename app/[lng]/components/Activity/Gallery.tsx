'use client';

import React, { useState } from 'react';
import { Carousel, Image, Modal } from 'antd';
// import 'antd/dist/antd.css'; // Ensure Ant Design styles are imported


export interface IImage{
  src: string;
  title: string;
}

export interface IGallery {
  images: IImage[];
}

const Gallery: React.FC<IGallery> = ({ images }) => {
  const [visible, setVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setVisible(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {images.map( ({title, src}, index) => (
            <div className="col-md-4 mb-4" key={title}>
              <Image
                src={src}
                alt={title}
                onClick={() => handleImageClick(index)}
                preview={false}
                style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        width="80%"
      >
        <Carousel
          initialSlide={selectedImageIndex}
          dots={false}
          arrows
          infinite={false}
        >
          {images.map(({src, title}) => (
            <div key={title} style={{ textAlign: 'center' }}>
              <Image src={src} alt={title} preview={false} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </>
  );
};

export default Gallery;
