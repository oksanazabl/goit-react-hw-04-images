 import { Component } from 'react';
//  import {fetchImages} from '../utils/fetchImages';
import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';
// import Button from './Button';
// import Loader from './Loader';
// import Modal from './Modal';

class App extends Component {
  state = {
    query: ''
      // images: [],
      // q: "",
      // page: 1,
      // isLoading: false,
      // selectedImage: null,
    }
 
  //   onSubmit = query => {
  //     this.setState({
  //       q: query,
  //       images: [],
  //       page: 1,
  //       isEmpty: false,
  //       showLoadMore: false,
  //       error: '',
  //     });
  //   };
  
  //   onLoadMore = () => {
  //     this.setState(prevState => ({ page: prevState.page + 1 }));
  //   };

  //   componentDidUpdate(prevProps, prevState) {
  //     if (
  //       prevState.q !== this.state.q ||
  //       prevState.page !== this.state.page
  //     ) {
  //       this.setState({ isLoading: true });
  //       fetchImages(this.state.q, this.state.page)
  //         .then(data => {
  //           if (!data.length) {
  //             this.setState({ isEmpty: true });
  //             return;
  //           }
  //           this.setState(prevState => ({
  //             images: [...prevState.images, ...data],
  //             showLoadMore: this.state.page < Math.ceil(data.totalHits / 12),
  //           }));
  //         })
  //         .catch(error => this.setState({ error: error.message }))
  //         .finally(() => this.setState({ isLoading: false }));
  //     }
  //   }

 

  // handleSearch = (value) => {
  //   this.setState({ q: value, page: 1, images: [] });
  // };

  // handleLoadMore = () => {
  //   this.setState((prevState) => ({ page: prevState.page + 1 }));
  // };

  // handleImageSelect = (image) => {
  //   this.setState({ selectedImage: image });
  // };

  // handleCloseModal = () => {
  //   this.setState({ selectedImage: null });
  // };
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    // const { images, isLoading, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery images={images} onSelect={this.handleImageSelect} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
        {selectedImage && (
          <Modal onClose={this.handleCloseModal} pic={selectedImage} />
        )} */}
      </>
    );
  }
}
export default App;