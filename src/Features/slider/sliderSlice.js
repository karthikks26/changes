import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    loader: false,
    sliderData: [], 
  };
  

export const sliderSlice = createSlice({
    name:"slider",
    initialState,
    reducers:{
        getsSliderFetch:(state)=>{
            state.status = "loading";
        },
        getSliderSuccess:(state,action)=>{
            state.sliderData = action.payload;
        },
        getSliderFailure:(state)=>{
            state.status = "failed";
        },
        fetchSliderRequest:(state,action)=>{
            state.loader = action.payload;
        }
    }
});
export const {getsSliderFetch,fetchSliderRequest,getSliderSuccess,getSliderFailure} = sliderSlice.actions;

export const selectSliderData = (state) => state.slider.sliderData;
export const selectSliderLoader = (state) => state.slider.loader;
export default sliderSlice.reducer;