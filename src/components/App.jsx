import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import Container from './Container';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { API_KEY, BASE_URL } from '../utils/const';
// import { alertEmptySearch } from '../utils/alert';



class App extends Component {
  state = {
      images: [],
      q: "",
      page: 1,
      isLoading: false,
      selectedImage: null,
    }
 

  componentDidMount() {
    document.title = "Image Search App";
  }

  componentDidUpdate( prevProps, prevState) {
    if (this.state.q !== prevState.q || this.state.page !== prevState.page) {
      this.fetchImages();
    }
  }

 
  fetchImages = () => {
    const { q, page } = this.state;
    const url = `${BASE_URL}/?key=${API_KEY}&q=${q}&image_type=photo&per_page=12&page=${page}`;
  
    this.setState({ isLoading: true }, () => {
      axios.get(url)
        .then(response => {
          const { hits, totalHits } = response.data;
          const images = hits.map(({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL }));
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            isLoading: false,
          }));
        })
        .catch(error => console.error(error));
    });
  };

  handleSearch = (value) => {
    this.setState({ q: value, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleImageSelect = (image) => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={images} onSelect={this.handleImageSelect} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export default App;