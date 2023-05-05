
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
smallImgURL,
alt,
largeImageURL,
onGalleryItemClick,
isActive,
}) => {
const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
setIsHovered(true);
};

const handleMouseLeave = () => {
setIsHovered(false);
};

return (
<li
   className={css.ImageGalleryItem}
   onClick={onGalleryItemClick}
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}
 >
<img
     src={smallImgURL}
     alt={alt}
     className={css.ImageGalleryItem_image}
   />
{isActive || isHovered ? (
<div className={css.ImageGalleryItem_overlay}>
<button
         type="button"
         className={css.ImageGalleryItem_fullscreenButton}
         onClick={onGalleryItemClick}
       >
Fullscreen
</button>
</div>
) : null}
</li>
);
};

ImageGalleryItem.propTypes = {
smallImgURL: PropTypes.string.isRequired,
alt: PropTypes.string.isRequired,
largeImageURL: PropTypes.string,
onGalleryItemClick: PropTypes.func.isRequired,
isActive: PropTypes.bool.isRequired,
};

export default ImageGalleryItem;