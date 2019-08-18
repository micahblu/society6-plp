export const GET_PRODUCTS = Symbol('GET_PRODUCTS');
export const GET_PRODUCTS_SUCCESS = Symbol('GET_PRODUCTS_SUCCESS');
export const GET_PRODUCTS_ERROR = Symbol('GET_PRODUCTS_ERROR');

export const SORT_BY_PRICE_ASC = Symbol('SORT_BY_PRICE_ASC');
export const SORT_BY_PROMOTES_ASC = Symbol('SORT_BY_PROMOTES_ASC');
export const RESET_SORT = Symbol('RESET_SORT');

export const getProducts = () => ({
  type: GET_PRODUCTS
});

export const sortByPrice = () => ({
  type: SORT_BY_PRICE_ASC
});

export const sortByPromotes = () => ({
  type: SORT_BY_PROMOTES_ASC
});

export const resetSort = () => ({
  type: RESET_SORT
});
