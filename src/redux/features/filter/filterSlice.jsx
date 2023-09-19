import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tag_selected: (state, action) => {
      state.selectedTags.push(action.payload);
    },
    tag_removed: (state, action) => {
      const tagindex = state.selectedTags.indexOf(action.payload);
      state.selectedTags.splice(tagindex, 1);
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { tag_selected, tag_removed, searched } = filterSlice.actions;
export default filterSlice.reducer;
