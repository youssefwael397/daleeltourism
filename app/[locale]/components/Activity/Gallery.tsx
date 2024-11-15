'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Image, Modal } from 'antd';
import 'animate.css';

export interface IImage {
  src: string;
}

export interface IGallery {
  images: string[];
}

const Gallery: React.FC<IGallery> = ({ images }) => {
  const [visible, setVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageHeights = useRef<number[]>([]);

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const loadHeights = () => {
      imageHeights.current = [];
      images.forEach((_, index) => {
        const img = new (window as any).Image();
        img.src = images[index];
        img.onload = () => {
          imageHeights.current[index] = img.height;
          if (imageHeights.current.length === images.length) {
            setMaxHeight(Math.max(...imageHeights.current));
          }
        };
      });
    };
    loadHeights();
  }, [images]);

  return (
    <div className="gallery-container bg-light">
      <div className="container">
        <div className="row">
          {images.map((src, index) => (
            <div
              className="col-md-4 gallery-img p-2 animate__animated"
              key={`img-${index}`}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
            >
              <Image
                src={src}
                alt={`img-${index}`}
                onClick={() => handleImageClick(index)}
                preview={false}
                className="img-fluid"
                style={{
                  cursor: 'pointer',
                  // width: '100%',
                  // height: maxHeight ? `${maxHeight}px` : 'auto',
                  height: '400px',
                  objectFit: 'cover',
                }}
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
          infinite={true}
        >
          {images.map((src, index) => (
            <div
              key={`img-${index}`}
              style={{ textAlign: 'center' }}
              id="gallery-inner-carousel"
              className="position-relative"
            >
              <Image
                src={src}
                alt={`img-${index}`}
                preview={false}
                width={'100%'}
              />
              {/* <p className="m-0 d-flex justify-content-center">
                <span className="text-white bg-black bg-opacity-50 px-4 py-2 text-center">
                  {title}
                </span>
              </p> */}
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default Gallery;
