import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, onGetLargeImage }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ tags, webformatURL }) => (
        <ImageGalleryItem
          key={nanoid()}
          smallImgURL={webformatURL} // Pass webformatURL as smallImgURL prop
          alt={tags}
          onGetLargeImage={onGetLargeImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
