import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addSortTerm, removeSortTerm} from '../../store/actions';
import Button from '../Button';
import './styles.css';

const ProductFilters = ({sortBy, addSortTerm, removeSortTerm}) => {
  let isSortingByPrice = sortBy.includes('price');
  let isSortingByPromote = sortBy.includes('promote_cnt');
  const onSortPrice = () => {
    if (isSortingByPrice) removeSortTerm('price');
    else addSortTerm('price');
  }
  const onSortPromote = () => {
    if (isSortingByPromote) removeSortTerm('promote_cnt');
    else addSortTerm('promote_cnt');
  }
  return (
    <div className="product-filters">
      <div className="filter-item">
        <Button onClick={onSortPrice} active={isSortingByPrice}>
          Sort by Price
        </Button>
      </div>
      <div className="filter-item">
        <Button onClick={onSortPromote} active={isSortingByPromote}>
          Sort by Popularity
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps({products}) {
  return {
    sortBy: products.sortBy
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addSortTerm,
    removeSortTerm
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);