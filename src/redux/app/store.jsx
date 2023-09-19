import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "../features/videos/videosSlice";
import tagSlice from "../features/tags/tagSlice";
import videoSlice from "../features/video/videoSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagSlice,
    video: videoSlice,
  },
});
export default store;
