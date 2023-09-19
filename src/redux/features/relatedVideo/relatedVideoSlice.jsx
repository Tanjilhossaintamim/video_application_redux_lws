import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideos from "./relatedVideoApi";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

const relatedVideosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.error = "";
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
        state.error = action.error?.message;
      });
  },
});

// thunk
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, currentVideoId }) => {
    const videos = await getRelatedVideos({ tags, currentVideoId });
    return videos;
  }
);

export default relatedVideosSlice.reducer;
