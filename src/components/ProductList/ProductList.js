import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useEffect} from 'react';
import {getProducts} from '../../store/actions';
import ProductCard from '../ProductCard';
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
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
      }
    </div>
  );
}
function mapStateToProps({products}) {
  let filteredProducts;
  if (products.sortedBy === 'price') {
    filteredProducts = products.sortedCards.price;
  } else if (products.sortedBy === 'promote') {
    filteredProducts = products.sortedCards.promote;
  } else {
    filteredProducts = products.cards;
  }
  return {
    products: filteredProducts,
    loading: products.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
