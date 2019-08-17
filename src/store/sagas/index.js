import {all} from 'redux-saga/effects';
import {getProductsWatcher} from './products.saga';

export default function* rootSaga() {
  yield all([
    getProductsWatcher()
  ]);
}