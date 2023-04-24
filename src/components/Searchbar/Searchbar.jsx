import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { GoSearch } from 'react-icons/go';
import { alertEmptySearch } from '../../utils/alert'; // Import the alertEmptySearch function

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      alertEmptySearch();
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <GoSearch style={{ width: 25, height: 25 }} />
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;