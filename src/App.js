// src/App.js
import React from "react";
import Gallery from "./components/Gallery";
import photos from "./photos"; // Assuming photos is an array of photo objects

const App = () => {
  const localPhotos = photos.map((el) => ({
    thumbnailUrl: el.urls.thumb,
    url: el.urls.full,
    title: el.alt_description,
  }));
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <Gallery photos={localPhotos} />
    </div>
  );
};

export default App;
