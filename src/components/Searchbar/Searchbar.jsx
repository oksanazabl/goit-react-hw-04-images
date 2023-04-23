import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { GoSearch } from 'react-icons/go';
import { alertEmptySearch } from '../../utils/alert'; // Import the alertEmptySearch function

class Searchbar extends Component {
  state = {
    q: '',
  };

  handleInputChange = event => {
    this.setState({ q: event.target.value.toLowerCase() });
  };

  onHandleSubmit = event => {
    const { q } = this.state;
    event.preventDefault();
    if (q === '') {
      return alertEmptySearch();
    }
    this.props.onSearch(this.state.q);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onHandleSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <GoSearch style={{ width: 25, height: 25 }} />
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            value={this.state.q}
            onInput={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;