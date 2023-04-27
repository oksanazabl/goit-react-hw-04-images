import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  smallImgURL,
  alt,
  largeImageURL,
  onGetLargeImage,
  toggleModal,
}) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => {
        onGetLargeImage({ largeImageURL: largeImageURL });
        toggleModal();
      }}
    >
      <img src={smallImgURL} alt={alt} className={css.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
