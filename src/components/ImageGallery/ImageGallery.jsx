import ImageGalleryItem from "../ImageGalleryItem";
import css from './ImageGallery.module.css'
import { nanoid } from 'nanoid';

const ImageGallery = ({ images,onGetLargeImage, showModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          showModal={showModal}
          modalUrl={largeImageURL}
          key={nanoid()}
          smallImgURL={webformatURL}  // Pass webformatURL as smallImgURL prop
          alt={tags}
         onGetLargeImage={onGetLargeImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;