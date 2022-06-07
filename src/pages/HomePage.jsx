import React, { useEffect, useReducer } from 'react';
import TYPES from '../actions/searchActions';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { searchInitialState, searchReducer } from '../reducers/searchReducer';
import APIProducts from '../mock/products';
import './HomePage.css';
import useModal from '../hooks/useModal';
import Message from '../components/Message';

const HomePage = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [state, dispatch] = useReducer(searchReducer, searchInitialState);
  const {
    products, searchInput, filteredProducts, errors, showFilteredProducts,
  } = state;

  useEffect(() => {
    dispatch({ type: TYPES.GET_DATA, payload: APIProducts });
    dispatch({ type: TYPES.UPDATE_SEARCH_INPUT, payload: query || '' });
    dispatch({ type: TYPES.FILTER_BY_SKU });
  }, []);

  return (
    <div data-testid="home-page">
      <h1 className="home__title">Search Product by Sku</h1>
      <div className="home__search">
        <SearchBar
          searchInput={searchInput}
          dispatch={dispatch}
          errors={errors}
          openModal={openModal}
          filteredProducts={filteredProducts}
        />
      </div>
      <hr />
      <div className="e-container home__prodcts">
        {filteredProducts.length > 0 && showFilteredProducts ? filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        )) : (
          <>
            <p>You can use the following product sku:</p>
            <ul>
              {products.map((product) => <li key={product.id}>{product.sku}</li>)}
            </ul>

          </>
        ) }
      </div>

      <Message isOpen={isOpenModal} closeModal={closeModal} dispatch={dispatch} />
    </div>
  );
};

export default HomePage;
