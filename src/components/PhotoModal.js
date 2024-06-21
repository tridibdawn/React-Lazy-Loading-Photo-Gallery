// src/components/PhotoModal.js
import React from 'react';
import './PhotoModal.css';

const PhotoModal = ({ photo, onClose }) => {
  return (
    <div className="photo-modal" onClick={onClose}>
      <img src={photo.url} alt={photo.title} />
    </div>
  );
};

export default PhotoModal;
