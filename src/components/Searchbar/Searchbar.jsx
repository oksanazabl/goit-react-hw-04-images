import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { GoSearch } from 'react-icons/go';
import { alertEmptySearch } from '../../utils/alert'; // Import the alertEmptySearch function

const Searchbar = ({ onSubmit }) => {
const [query, setQuery] = useState('');

const handleInputChange = event => {
setQuery(event.target.value.toLowerCase());
};

const handleSubmit = event => {
event.preventDefault();

    if (query.trim() === '') {
  alertEmptySearch();
  return;
}
onSubmit(query);
setQuery('');
  };

  return (
<header className={css.Searchbar}>
<form className={css.SearchForm} onSubmit={handleSubmit}>
<input
       className={css.SearchForm_input}
       type="text"
       autoComplete="off"
       autoFocus
       placeholder="Search images..."
       value={query}
       onChange={handleInputChange}
     />
<button type="submit" className={css.SearchForm__button}>
<GoSearch style={{ width: 25, height: 25 }} />
</button>
</form>
</header>
);
};

Searchbar.propTypes = {
onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
