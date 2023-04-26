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
    modalImage: {},
  };

  componentDidMount() {
    const { searchQuery, page } = this.state;

    if (searchQuery) {
      this.fetchImages(searchQuery, page);
    }
  }

 componentDidUpdate(_, prevState) {
  const { searchQuery, page } = this.state;

  if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
    this.fetch(page);
  }
}

  fetch = page => {
    const { searchQuery } = this.state; 
    this.setState({ isLoading: true });

    try {
      fetchImages(searchQuery, page)
        .then(response => {
          const newImages = response.data.hits.map(image => ({
            id: image.id,
            key: image.id,
            webformatURL: image.webformatURL,
            largeImageURL: image.largeImageURL,
            tags: image.tags,
          }));

          this.setState(prevState => ({
            images:
              page === 1 ? newImages : [...prevState.images, ...newImages],
            isLoading: false,
          }));
        })
        .catch(error => {
          console.error('Error while fetching images', error);
          this.setState({ isLoading: false });
        });
    } catch (error) {
      console.error('Error while fetching images', error);
    }
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = id => {
    const { images } = this.state;

    const image = images.find(image => image.id === id);

    this.setState({
      modalImage: {
        largeUrl: image.largeImageURL,
        alt: image.tags,
      },
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      modalImage: {},
    });
  };

  render() {
    const { images, isLoading, showModal, modalImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />

        <>
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onImageClick={this.handleImageClick}
              // key={prevState.images.id}
            />
          )}

          {isLoading && <Loader />}

          {images.length > 0 && !isLoading && (
            <Button onLoadMore={this.handleLoadMore} />
          )}
        </>

        {showModal && (
          <Modal modalImage={modalImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
