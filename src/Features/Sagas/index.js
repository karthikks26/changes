// sagas/index.js
import { all } from 'redux-saga/effects';
import { watchFetchRecommendedProduct } from './recommendationSaga';

export default function* rootSaga() {
  yield all([
    watchFetchRecommendedProduct(),
    
  ]);
}
