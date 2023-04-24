import React, { useState } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Modal from '../Modal';
import Loader from "components/Loader/Loader";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  const [status, setStatus] = useState({
    showModal: false,
    bigPic: null,
  });

  const toggleModal = (pic) => {
    setStatus({
      showModal: !status.showModal,
      bigPic: pic,
    });
  };

  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={{ ...image, webformatURL: image.smallImgURL }}
          onSelect={() => toggleModal(image.largeImageURL)}
        />
      ))}

      {status.showModal && status.bigPic && (
        <Modal onClose={() => toggleModal(null)} pic={status.bigPic} />
      )}
    </ul>
  );
};

export default ImageGallery;