import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, onGetLargeImage, toggleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={nanoid()}
          smallImgURL={webformatURL}
          alt={tags}
          onGetLargeImage={onGetLargeImage}
          largeImageURL={largeImageURL}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
