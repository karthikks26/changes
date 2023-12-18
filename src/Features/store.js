import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import recommendationReducer from './recommendation/recommendationSlice'

export const store = configureStore({
  reducer: {
    recommendedProduct:recommendationReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
})