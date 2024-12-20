import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getWords: builder.query({
      query: () => "/words",
    }),
    toggleRememberedWord: builder.mutation({
      query: (word) => ({
        url: `/words/` + word.word,
        method: "PUT",
        body: { ...word, remembered: !word.remembered },
      }),
    }),
  }),
});

export const { useGetWordsQuery, useToggleRememberedWordMutation } = apiSlice;
