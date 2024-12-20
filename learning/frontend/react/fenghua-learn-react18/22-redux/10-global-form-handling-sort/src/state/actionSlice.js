const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchTerm: "",
  sort: "",
};

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSort(state) {
      if (state.sort === "") state.sort = "asc";
      else if (state.sort === "asc") state.sort = "desc";
      else {
        state.sort = "";
      }
    },
  },
});

export const { setSearchTerm, setSort } = actionSlice.actions;
export default actionSlice.reducer;
