import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Words"],
  endpoints: (builder) => ({
    getWords: builder.query({
      query: () => "/words",
      providesTags: ["Words"],
    }),
    toggleRememberedWord: builder.mutation({
      query: (word) => ({
        url: `/words/` + word.word,
        method: "PUT",
        body: { ...word, remembered: !word.remembered },
      }),
      invalidatesTags: ["Words"],
    }),
  }),
});

export const { useGetWordsQuery, useToggleRememberedWordMutation } = apiSlice;
