// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Photo from './Photo';
import PhotoModal from './PhotoModal';

const Gallery = ({ photos }) => {
  const getColumns = () => {
    if (window.innerWidth > 1200) return 4;
    if (window.innerWidth > 800) return 3;
    if (window.innerWidth > 600) return 2;
    return 1;
  };
  
  const [columns, setColumns] = useState(getColumns());
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedPhoto) return;

      const currentIndex = photos.indexOf(selectedPhoto);
      if (event.key === 'ArrowRight' && currentIndex < photos.length - 1) {
        setSelectedPhoto(photos[currentIndex + 1]);
      } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
        setSelectedPhoto(photos[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, photos]);


  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <Photo key={index} photo={photo} onClick={() => handlePhotoClick(photo)} />
      ))}
      {selectedPhoto && <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />}
    </div>
  );
};

export default Gallery;
