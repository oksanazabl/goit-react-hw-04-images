import { useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onGetLargeImage, toggleModal }) => {
const [galleryId, setGalleryId] = useState('');

const handleGalleryItemClick = (id) => {
setGalleryId(id);
onGetLargeImage(id);
toggleModal();
};

return (
<ul className={css.ImageGallery}>
  {images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImageGalleryItem
      key={`${id}-${webformatURL}`}
      smallImgURL={webformatURL}
      alt={tags}
      largeImageURL={largeImageURL}
      onGalleryItemClick={() => handleGalleryItemClick(id)}
      isActive={id === galleryId}
    />
  ))}
</ul>
);
};

ImageGallery.propTypes = {
images: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.number.isRequired,
webformatURL: PropTypes.string.isRequired,
tags: PropTypes.string.isRequired,
largeImageURL: PropTypes.string.isRequired,
})
).isRequired,
onGetLargeImage: PropTypes.func.isRequired,
toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;