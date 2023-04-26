import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          showModal={showModal}
          modalUrl={largeImageURL}
          key={id}
          url={webformatURL}
          alt={tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

ImageGallery.defaultProps = {
  images: [],
};

export default ImageGallery;