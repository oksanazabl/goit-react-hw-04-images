import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img src={this.props.smallImgURL} alt={this.props.id} />
      </li>
    );
  }
}


ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;