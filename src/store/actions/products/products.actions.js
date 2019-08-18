export const GET_PRODUCTS = Symbol('GET_PRODUCTS');
export const GET_PRODUCTS_SUCCESS = Symbol('GET_PRODUCTS_SUCCESS');
export const GET_PRODUCTS_ERROR = Symbol('GET_PRODUCTS_ERROR');

export const ADD_SORT_TERM = Symbol('ADD_SORT_TERM');
export const REMOVE_SORT_TERM = Symbol('REMOVE_SORT_TERM');

export const getProducts = () => ({
  type: GET_PRODUCTS
});

export const addSortTerm = payload => ({
  type: ADD_SORT_TERM,
  payload
});

export const removeSortTerm = payload => ({
  type: REMOVE_SORT_TERM,
  payload
});

