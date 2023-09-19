import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

export const Searchbar = ({ onSubmit }) => {
  const [pictureName, setPictureName] = useState('');

  const handleInputChange = e => {
    setPictureName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pictureName.trim() === '') {
      return alert('Enter the name of the picture');
    }
    onSubmit(pictureName);
    setPictureName('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={pictureName}
          name="query"
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
