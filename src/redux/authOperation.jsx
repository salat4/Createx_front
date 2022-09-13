import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://createx1.herokuapp.com/',
    keepUnusedDataFor: 1,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/createx/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/createx/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
} = authOperation;