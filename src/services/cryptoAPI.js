import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'e7d9b9b02emsh9b2c1084b9a8ad0p1f815djsn397ab6b943eb',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoApiHeaders});
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;
// query: (count) => createRequest(`/coins?limit=${count}`)
