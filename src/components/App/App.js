import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
import Header from '../Header';
import ProductList from '../ProductList';
import ProductFilters from '../ProductFilters';
import './styles.css';

export default () => (
  <Provider store={store}>
    <div className="app">
      <Header />
      <ProductFilters />
      <ProductList />
    </div>
  </Provider>
);
