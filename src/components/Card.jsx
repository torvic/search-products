/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

const Card = ({ product }) => (
  <div className="product">
    <div className="product__image">
      <img src={product.image} alt="" />
    </div>
    <div className="product__content">
      <h2 className="product__name">{product.title}</h2>
      <p className="product__description">{product.description}</p>
      <div className="product__price">
        <p>{`Price: $ ${product.price}`}</p>
        <p>{`Sku: ${product.sku}`}</p>
      </div>
    </div>
  </div>
);

export default Card;
