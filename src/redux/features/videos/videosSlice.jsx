import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideos from "./videosApi";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.error = "";
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
        state.error = action.error?.message;
      });
  },
});

// thunk
export const fetchVideos = createAsyncThunk(
  "videos/fetchvideos",
  async ({ selectedTags, search }) => {
    const videos = await getVideos({selectedTags, search});
    return videos;
  }
);

export default videosSlice.reducer;
