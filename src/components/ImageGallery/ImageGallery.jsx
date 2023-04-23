import React, { useState } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Modal from '../Modal';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const [bigPic, setBigPic] = useState("");

  const toggleModal = (pic) => {
    console.log("Clicked image:", pic);
    setBigPic(pic);
    console.log("bigPic state:", bigPic);
    setShowModal(!showModal);
  };

  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onSelect={toggleModal}
        />
      ))}
      {showModal && bigPic && (
        <Modal onClose={toggleModal} pic={bigPic} />
      )}
    </ul>
  );
};

export default ImageGallery;