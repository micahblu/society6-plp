import {put, takeLatest, call} from 'redux-saga/effects';
import * as Actions from '../actions';

function* getProductsSaga(action) {
  try {
    const response = yield call(fetch, '../../mocks/products.json');
    put({
      type: Actions.GET_PRODUCTS_SUCCESS,
      payload: response.data.attributes
    });
  } catch(error) {
    put({
      type: Actions.GET_PRODUCTS_ERROR,
      payload: error
    });
  }
}

export function* getProductsWatcher() {
  yield takeLatest(Actions.GET_PRODUCTS, getProductsSaga);
}