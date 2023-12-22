
import { configureStore } from '@reduxjs/toolkit';
import recommendationReducer from './recommendation/recommendationSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/index';
import sliderReducer from './slider/sliderSlice';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    recommendedProduct: recommendationReducer,
    slider: sliderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
