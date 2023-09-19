import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "../features/videos/videosSlice";
import tagSlice from "../features/tags/tagSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagSlice,
  },
});
export default store;
