/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TYPES from '../actions/searchActions';
import './Message.css';

const Message = ({ isOpen, closeModal, dispatch }) => {
  const navigate = useNavigate();
  const handleModalContainerClick = (e) => e.stopPropagation();
  const handleNewSearch = () => {
    closeModal();
    dispatch({ type: TYPES.SHOW_FILTERED_PRODUCTS, payload: false });
    dispatch({ type: TYPES.RESET_INPUT });
    navigate('/');
  };
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <div className="modal-content">
          <h3>No products found</h3>
          <img src="https://citroen.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png" alt="" />
          <button type="button" onClick={handleNewSearch}>New Search</button>
        </div>
      </div>
    </article>

  );
};

export default Message;
