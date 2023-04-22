import { alertEmptySearch } from '../../utils/alert';
import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    q: '',
  };

  handleInputChange = event =>{
    this.setState({q:event.target.value.toLoverCase()})
  }

  onHandleSubmit= event=>{
    const {q} = this.state;
    event.preventDefault()
    if (q===""){
       return alertEmptySearch()
    }
    this.props.onSubmit(q)
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onHandleSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            Search
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.q}
            onInput={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
