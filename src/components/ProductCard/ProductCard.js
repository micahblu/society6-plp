import React from 'react';
import './styles.css';

export default ({product}) => {
  return (
  <div className="card">
    <div className="card-image">
      <img src={product.card.image.src} alt={product.card.image.alt} />
    </div>
    <div className="row">
      <div className="card-title">{product.card.title}</div>
      <div className="card-promote">{product.product['promote_cnt']}</div>
    </div>
    <div className="row">
      <div className="product-artist">{product.artist['display_name']}</div>
    </div>
    <div className="row">
      <div className="product-price">{product.product.price}</div>
    </div>
  </div>  
);
}