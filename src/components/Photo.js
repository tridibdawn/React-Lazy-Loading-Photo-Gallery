// src/components/Photo.js
import React, { useRef, useEffect, useState } from 'react';
import './Photo.css';

const Photo = ({ photo, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="photo" ref={imgRef} onClick={onClick}>
      {isVisible && <img src={photo.thumbnailUrl} alt={photo.title} />}
    </div>
  );
};

export default Photo;
