import React from "react";
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ image, onSelect }) => {
  const { webformatURL, tags, id } = image;

  const handleClick = () => {
    onSelect(id);
  };

  return (
    <li className={CSS.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItem_image}
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageGalleryItem;