import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  recommendedProductData: null,
};

export const recommendationSlice = createSlice({
  name: "recommendedProduct",
  initialState,
  reducers: {
    recomendProduct: (state, action) => {
      state.recommendedProduct = action.payload;
    },
  },
});

export const { recomendProduct } = recommendationSlice.actions;

export const selectRecommendedProduct = (state) => state.recommendedProduct.recommendedProductData;

export default recommendationSlice.reducer;
