import { Component } from 'react';
import ImageGalleryItem from "../ImageGalleryItem";
import Modal from '../Modal';
// import Loader from "components/Loader/Loader";
import {fetchImages} from '../../utils/fetchImages';
import css from './ImageGallery.module.css'

class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    showLoadMore: false,
    isLoading: false, //
    isEmpty: false,
    error: '',
  };

componentDidUpdate(prevProps, prevState) {
  if (
    prevState.query !== this.state.query ||
    prevState.page !== this.state.page
  ) {
    this.setState({ isLoading: true });
    fetchImages.getImages(this.state.query, this.state.page)
      .then(data => {
        if (!data.photos.length) {
          this.setState({ isEmpty: true });
          return;
        }
        this.setState(prevState => ({
          photos: [...prevState.photos, ...data.photos],

          showLoadMore: this.state.page < Math.ceil(data.total_results / 12),
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(this.setState({ isLoading: false }));
  }
}
onSubmit = query => {
  this.setState({
    query,
    photo: [],
    page: 1,
    isEmpty: false,
    showLoadMore: false,
    error: '',
  });
};

onLoadMore = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }));
};

render(){
  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          smallImgURL={img.webformatURL}
        />
      ))}

      {showModal && bigPic && (
        <Modal onClose={toggleModal} pic={bigPic} />
      )}
    </ul>
  );
}
  
};

export default ImageGallery;