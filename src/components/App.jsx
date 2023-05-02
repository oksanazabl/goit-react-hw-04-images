import { Component } from 'react';
import fetchImages from 'utils/fetchImages';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
// import Container from './Container';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isLoading: false,
    showModal: false,
    modalImage: '',
    imageAlt: '',
    showButton: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetch();
    }
  }

  // fetch = () => {
  //   const { searchQuery, page } = this.state;
  //   this.setState({ isLoading: true });

  //   try {
  //     fetchImages(searchQuery, page)
  //       .then(response => {
  //         const newImages = response.data.hits.map(image => ({
  //           id: image.id,
  //           key: image.id,
  //           webformatURL: image.webformatURL,
  //           largeImageURL: image.largeImageURL,
  //           tags: image.tags,
  //         }));

  //         this.setState(prevState => ({
  //           images: [...prevState.images, ...newImages],
  //           isLoading: false,
  //         }));
  //       })
  //       .catch(error => {
  //         console.error('Error while fetching images', error);
  //         this.setState({ isLoading: false });
  //       });
  //   } catch (error) {
  //     console.error('Error while fetching images', error);
  //   }
  // };
fetch = async () => {
  const { searchQuery, page } = this.state;
  this.setState({ isLoading: true });

  try {
    const response = await fetchImages(searchQuery, page);
    const newImages = response.data.hits.map(image => ({
      id: image.id,
      key: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    }));

    this.setState(prevState => ({
      images: [...prevState.images, ...newImages],
showButton: page < Math.ceil(response.data.total / 12),
    }));
  } catch (error) {
    console.error('Error while fetching images', error);
  } finally {
    this.setState({ isLoading: false });
  }
};

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  onGetLargeImage = event => {
    this.setState({ modalImage: event });
  };

  largeImageUrl = event => {
    this.setState({ imageAlt: event });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleGetLargeImage = image => {
    this.setState({ modalImage: image });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    console.log('open modal');
  };

  // handleCloseModal = () => {
  //   this.setState({
  //     showModal: false,
  //     modalImage: {},
  //   });
  // };

  render() {
    const { images, isLoading, showModal, modalImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />

        <>
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onGetLargeImage={this.handleGetLargeImage}
              toggleModal={this.toggleModal}
            />
          )}

          {isLoading && <Loader />}

          {images.length < 0 && !isLoading && (
            <Button onLoadMore={this.handleLoadMore} />
          )}
        </>
        {showModal && (
          <Modal onClose={this.toggleModal} modalImage={modalImage} />
        )}
      </div>
    );
  }
}

export default App;
