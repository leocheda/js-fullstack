const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchTerm: "",
};

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = actionSlice.actions;
export default actionSlice.reducer;
