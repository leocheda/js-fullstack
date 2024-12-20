import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import wordReducer from "./wordSlice";
import actionReducer from "./actionSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    word: wordReducer,
    action: actionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
