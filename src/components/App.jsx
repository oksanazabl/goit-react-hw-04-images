import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "./Loader";
import fetchImages from "../utils/fetchImages";
import { alertNoSuchImages } from "../utils/alert";

class App extends Component {
  state = {
    pictures: [],
    error: "",
    status: "idle",
    page: 1,
    query: "",
    totalHits: null,
  };

  onFetch = () => {
    return fetchImages()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return alertNoSuchImages();
      })
      .then(pictures => {
        if (!pictures.total) {
          alertNoSuchImages();
        }
        const selectedProperties = pictures.hits.map(
          ({ id, largeImageURL, webformatURL }) => {
            return { id, largeImageURL, webformatURL };
          }
        );
        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...selectedProperties],
            status: 'resolved',
            totalHits: pictures.total,
          };
        });
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ status: "pending", pictures: [], page: 1 });
      this.onFetch().then((pictures) => {
        this.setState({ pictures, status: "resolved" });
      });
    }
    if (this.state.query === prevState.query && this.state.page !== prevState.page) {
      this.setState({ status: "pending" });
      this.onFetch().then((pictures) => {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures],
          status: "resolved",
        }));
      });
    }
  }

  handleSetQuery = (query) => {
    this.setState({ query });
  };

  handleGetImages = () => {
    this.setState({ status: "pending", pictures: [], page: 1 });
    this.onFetch().then((pictures) => {
      this.setState({ pictures, status: "resolved" });
    });
  };

  handleCloseModal = () => {
    this.setState({ modal: null });
  };

  onModal = (src) => {
    this.setState({ modal: src });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { query, pictures, modal, status, totalHits } = this.state;
    return (
      <div className="App">
        <Searchbar query={query} onSetQuery={this.handleSetQuery} onSubmit={this.handleGetImages} />
        {pictures.length > 0 && <ImageGallery images={pictures} />}
        {totalHits > pictures.length && (
          <Button onClick={this.handleLoadMore} />
        )}
        {modal && <Modal closeModal={this.handleCloseModal} modalImg={modal} />}
      </div>
    );
  }
}

export default App;