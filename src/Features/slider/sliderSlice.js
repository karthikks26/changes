import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'idle',
  loader: false,
  sliderData: [], 
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    getsSliderFetch: (state) => {
      console.log('getsSliderFetch dispatched');
      state.status = "loading";
      state.loader = true;
    },
    getSliderSuccess: (state, action) => {
      console.log('getSliderSuccess dispatched with payload:', action.payload);
      state.sliderData = action.payload;
      state.loader = false;
      state.status = "succeeded";
    },
    getSliderFailure: (state) => {
      console.log('getSliderFailure dispatched');
      state.status = "failed";
    },
    fetchSliderRequest: (state, action) => {
      console.log('fetchSliderRequest dispatched with payload:', action.payload);
      state.loader = action.payload;
    },
  },
});

export const {
  getsSliderFetch,
  fetchSliderRequest,
  getSliderSuccess,
  getSliderFailure,
} = sliderSlice.actions;

export const selectSliderData = (state) => state.slider.sliderData;
export const selectSliderLoader = (state) => state.slider.loader;
export const selectSliderStatus = (state) => state.slider.status;

export default sliderSlice.reducer;
