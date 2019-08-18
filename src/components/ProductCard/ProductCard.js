import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './styles.css';

export default ({product}) => {
  return (
  <div className="card">
    <div className="card-image">
      <img src={product.card.image.src} alt={product.card.image.alt} />
    </div>
    <div className="card-details">
      <div className="row">
        <div className="card-title">{product.card.title}</div>
        <div className="card-promote"><FontAwesomeIcon icon={faHeart} /> {product.product['promote_cnt']}</div>
      </div>
      <div className="row">
        <div className="product-artist">by {product.artist['display_name']}</div>
      </div>
      <div className="row">
        <div className="product-price">
          <span className="slashed-price">${product.product.price}</span> &nbsp; 
          ${product.product['discount_price'].toFixed(2)}
        </div>
      </div>
    </div>
  </div>  
);
}