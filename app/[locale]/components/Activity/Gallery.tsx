'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Image, Modal } from 'antd';
import 'animate.css';

export interface IImage {
  src: string;
  title: string;
}

export interface IGallery {
  images: IImage[];
}

const Gallery: React.FC<IGallery> = ({ images }) => {
  const [visible, setVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setVisible(true);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__zoomIn');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="gallery-container bg-light">
      <div className="container">
        <div className="row">
          {images.map(({ title, src }, index) => (
            <div
              className="col-md-4 gallery-img p-2 animate__animated"
              key={title}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
            >
              <Image
                src={src}
                alt={title}
                onClick={() => handleImageClick(index)}
                preview={false}
                className="img-fluid"
                style={{ cursor: 'pointer', width: '100%', height: '270px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        className="gallery-modal"
        width="80%"
      >
        <Carousel
          initialSlide={selectedImageIndex}
          dots={false}
          arrows
          infinite={false}
        >
          {images.map(({ src, title }) => (
            <div
              key={title}
              style={{ textAlign: 'center' }}
              id="gallery-inner-carousel"
              className="position-relative "
            >
              <Image src={src} alt={title} preview={false} width={'100'} />
              <p className="m-0 d-flex justify-content-center">
                <span className="text-white bg-black bg-opacity-50 px-4 py-2 text-center">
                  {title}
                </span>
              </p>
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default Gallery;
