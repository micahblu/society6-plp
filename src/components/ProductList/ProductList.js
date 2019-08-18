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
