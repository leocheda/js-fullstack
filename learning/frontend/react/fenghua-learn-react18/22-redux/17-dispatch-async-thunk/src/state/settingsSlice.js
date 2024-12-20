import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: "English",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    selectLanguage: (state, action) => {
      // immer
      state.selectedLanguage = action.payload;
    },
  },
});

export const selectedLanguage = (state) => state.settings.selectedLanguage;

export const { selectLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
