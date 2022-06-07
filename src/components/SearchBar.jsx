/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TYPES from '../actions/searchActions';
import './SearchBar.css';

const SearchBar = ({
  searchInput, errors, dispatch, openModal, filteredProducts,
}) => {
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const validationInput = (search) => {
    const error = {};
    if (search.length < 4) {
      error.search = 'Minimum 4 characters and maximum 7';
    } else if (search.length > 7) {
      error.search = 'Minimum 4 characters and maximum 7';
    }
    return error;
  };

  const searchProduct = (searchValue) => {
    dispatch({ type: TYPES.UPDATE_SEARCH_INPUT, payload: searchValue });
    dispatch({ type: TYPES.VERIFY_VALIDATION_INPUT, payload: validationInput(searchValue) });
    dispatch({ type: TYPES.FILTER_BY_SKU });
  };

  const onSubmit = (e) => {
    navigate(`?s=${searchInput}`);
    e.preventDefault();
    dispatch({ type: TYPES.FILTER_BY_SKU });
    dispatch({ type: TYPES.SHOW_FILTERED_PRODUCTS, payload: true });
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search" className="hidden">
        Search product
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search product"
        onChange={(e) => searchProduct(e.target.value)}
        value={searchInput}
        ref={searchInputRef}
      />
      <button
        type="submit"
        disabled={errors.search || searchInput.length === 0}
        onClick={filteredProducts.length === 0 && openModal}
      >
        Search
      </button>
      {errors.search && <p className="search__error">{errors.search}</p>}
    </form>
  );
};

export default SearchBar;
