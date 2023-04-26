import ImageGalleryItem from "../ImageGalleryItem";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, showModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          showModal={showModal}
          modalUrl={largeImageURL}
          key={id}
          smallImgURL={webformatURL}  // Pass webformatURL as smallImgURL prop
          alt={tags}
          id={id}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;