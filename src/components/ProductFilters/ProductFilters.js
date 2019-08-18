import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortByPrice, sortByPromotes, resetSort} from '../../store/actions';
import Button from '../Button';
import './styles.css';

const ProductFilters = ({sortedBy, sortByPrice, sortByPromotes, resetSort}) => {
  const onSortPrice = () => {
    if (sortedBy === 'price') resetSort();
    else sortByPrice();
  }
  const onSortPromote = () => {
    if (sortedBy === 'promote') resetSort();
    else sortByPromotes();
  }
  return (
    <div className="filter-row">
      <div className="filter-item">
        <Button onClick={onSortPrice} active={sortedBy === 'price'}>
          Sort by Price
        </Button>
      </div>
      <div className="filter-item">
        <Button onClick={onSortPromote} active={sortedBy === 'promote'}>
          Sort by Popularity
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps({products}) {
  return {
    sortedBy: products.sortedBy
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sortByPrice,
    sortByPromotes,
    resetSort
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);