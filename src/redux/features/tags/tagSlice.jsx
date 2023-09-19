import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagApi";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.error = "";
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.tags = [];
        state.error = action.error?.message;
      });
  },
});

// thunk
export const fetchTags = createAsyncThunk("videos/fetchvideos", async () => {
  const tags = await getTags();
  return tags;
});

export default tagSlice.reducer;
