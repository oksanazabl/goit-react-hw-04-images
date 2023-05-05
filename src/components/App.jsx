import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchImages from 'utils/fetchImages';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetchImages(searchQuery, page);
        const newImages = response.data.hits.map(image => ({
          id: image.id,
          key: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        }));

        setImages(prevImages => [...prevImages, ...newImages]);
        setShowButton(page < Math.ceil(response.data.totalHits / 12));
      } catch (error) {
        console.error('Error while fetching images', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handleSearch = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleGetLargeImage = image => {
    setModalImage(image);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setShowButton(false); // Приховуємо кнопку при першому запуску
  }, []);

  return (
    <div>
        <Searchbar onSubmit={handleSearch} />

        <>
          {searchQuery &&images.length > 0 && (
            <ImageGallery
              images={images}
              onGetLargeImage={handleGetLargeImage}
              toggleModal={toggleModal}
            />
          )}

          {isLoading && <Loader />}

          {showButton ? <Button onLoadMore={handleLoadMore} /> : null}
        </>
        {showModal && (
          <Modal onClose={toggleModal} modalImage={modalImage} />
        )}
      </div>
  );
}

App.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  showModal: PropTypes.bool,
  modalImage: PropTypes.string,
  imageAlt: PropTypes.string,
  showButton: PropTypes.bool,
};

export default App;