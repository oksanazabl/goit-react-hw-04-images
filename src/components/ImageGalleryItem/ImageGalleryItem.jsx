import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImgURL, alt, onGetLargeImage }) => (
  <li className={css.ImageGalleryItem}>
    <img
      src={smallImgURL}
      alt={alt}
      className={css.ImageGalleryItem_image}
      onClick={onGetLargeImage} // update to onGetLargeImage
    />
  </li>
);

export default ImageGalleryItem;
