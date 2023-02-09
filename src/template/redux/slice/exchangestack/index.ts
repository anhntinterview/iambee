import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coreStackExchangeSliceApi = createApi({
  reducerPath: "stackExchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.stackexchange.com/2.3/"
  }),
  tagTypes: [
    "Questions", 
    "Tags"
  ],
  endpoints: () => ({}),
});

export default coreStackExchangeSliceApi.reducer;