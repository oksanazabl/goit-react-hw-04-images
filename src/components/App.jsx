import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "./Loader";
import fetchImages from "../utils/fetchImages";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    modal: "",
    loader: false,
  };



  

  


  render() {
    const { query, images, modal, loader } = this.state;
    return (
      <div className="App">
        <Searchbar
          query={query}
          onSetQuery={this.handleSetQuery}
          onSubmit={this.handleGetImages}
        />
        {loader && <Loader />}
        <ImageGallery showModal={this.onModal} images={images} />
        {!!images.length && <Button onLoadMore={this.handleLoadMore} />}
        {modal && <Modal closeModal={this.handleCloseModal} modalImg={modal} />}
      </div>
    );
  }
}

export default App;