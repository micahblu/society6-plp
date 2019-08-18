import {put, takeLatest, call} from 'redux-saga/effects';
import * as Actions from '../actions';

function* getProductsSaga(action) {
  try {
    const response = yield call(fetch, '/products');
    const json = yield response.json();
    yield put({
      type: Actions.GET_PRODUCTS_SUCCESS,
      payload: json.data.attributes
    });
  } catch(error) {
    yield put({
      type: Actions.GET_PRODUCTS_ERROR,
      payload: error
    });
  }
}

export function* getProductsWatcher() {
  yield takeLatest(Actions.GET_PRODUCTS, getProductsSaga);
}