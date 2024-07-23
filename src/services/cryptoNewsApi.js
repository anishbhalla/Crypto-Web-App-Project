import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'x-rapidapi-key': '11897595f4mshdd3bf665273a4b6p19001ajsnf1536e80f6c4',
    'x-rapidapi-host': 'crypto-news51.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news51.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({page,limit,time}) => createRequest(`/api/v1/crypto/articles?page=${page}&limit=${limit}&format=json&time_frame=${time}`),
        }) 
    })
})

export const {
    useGetCryptosNewsQuery
} = cryptoNewsApi
