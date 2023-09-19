import axiosInstance from "../../../utils/axios";

const getRelatedVideos = async ({ tags, currentVideoId }) => {
  const limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${currentVideoId}&_limit=${limit}`
      : `id_ne=${currentVideoId}&_limit=${limit}`;

  const response = await axiosInstance(`/videos?${queryString}`);
  return response.data;
};

export default getRelatedVideos;
