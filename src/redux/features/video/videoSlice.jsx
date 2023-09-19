import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo from "./videoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.error = "";
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.video = {};
        state.error = action.error?.message;
      });
  },
});

// thunk
export const fetchVideo = createAsyncThunk("video/fetchvideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

export default videoSlice.reducer;
