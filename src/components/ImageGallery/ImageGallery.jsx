import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;