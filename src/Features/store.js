import { configureStore } from "@reduxjs/toolkit";
import recommendationReducer from "./Slices/recommendationSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/index";
import sliderReducer from "./Slices/sliderSlice";
import { sliderApi } from "./slider/sliderApi";
import searchReducer from "./search/searchSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    recommendedProduct: recommendationReducer,
    slider: sliderReducer,
    productWithSearch:searchReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware,sliderApi.middleware),
});

sagaMiddleware.run(rootSaga);
