import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: "English",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
});

export default settingsSlice.reducer;
