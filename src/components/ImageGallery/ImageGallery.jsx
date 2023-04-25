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
  images: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageGallery;