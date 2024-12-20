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
      async onQueryStarted(word, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getWords", undefined, (draft) => {
            const wordIndex = draft[word.language].findIndex(
              (w) => w.word === word.word
            );
            draft[word.language][wordIndex].remembered = !word.remembered;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetWordsQuery, useToggleRememberedWordMutation } = apiSlice;
