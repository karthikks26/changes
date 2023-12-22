import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from "../../config";
const BASE_URL="http://localhost:8080/api"

export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getSliderImg: builder.query({
        query: () => '/getImgCircle'
    }),
  }),
});

export const {
  useGetSliderImgQuery
} = sliderApi;
