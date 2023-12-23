// sagas/index.js
import { all } from 'redux-saga/effects';
import { watchFetchRecommendedProduct } from './recommendationSaga';
import { watchFetchSliderView } from './sliderSaga';
import { watchSearchProducts } from './searchSaga';

export default function* rootSaga() {
  yield all([
    watchFetchRecommendedProduct(),
    watchFetchSliderView(),
    watchSearchProducts()
  ]);
}
