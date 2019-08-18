import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useEffect} from 'react';
import {getProducts} from '../../store/actions'
import './styles.css';

const ProductList = ({getProducts, products, loading}) => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      {
        loading
          ? <p>Loading products</p>
          : <div className="product-list">
              {
                products.map(product => (
                  <div key={product.id} className="card">
                    <div className="card-image">
                      <img src={product.card.image.src} alt={product.card.title} />
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
                ))
              }
            </div>
      }
    </div>
  );
}
function mapStateToProps({products}) {
  console.log('products', products);
  return {
    products: products.cards,
    loading: products.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
