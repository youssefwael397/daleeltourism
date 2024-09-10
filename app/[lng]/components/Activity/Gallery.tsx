'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Image, Modal } from 'antd';
import 'animate.css'; // Import animate.css

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
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref array to store references to each image container

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setVisible(true);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__zoomIn');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, observerOptions);

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref); // Observe each image container
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref); // Clean up observer on unmount
      });
    };
  }, []);

  return (
    <div className="gallery-container">
      <div className="container">
        <div className="row">
          {images.map(({ title, src }, index) => (
            <div
              className="col-md-4 gallery-img p-2 animate__animated" // Add animate__animated class
              key={title}
              ref={(el) => (imageRefs.current[index] = el)} // Store ref for each image container
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
        width="80%"
      >
        <Carousel
          initialSlide={selectedImageIndex}
          dots={false}
          arrows
          infinite={false}
        >
          {images.map(({ src, title }) => (
            <div key={title} style={{ textAlign: 'center' }}>
              <Image src={src} alt={title} preview={false} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default Gallery;
