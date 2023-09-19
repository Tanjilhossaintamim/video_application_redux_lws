import axiosInstance from "../../../utils/axios";

const getRelatedVideos = async (query, id) => {
  const response = await axiosInstance(`/videos?${query}id_ne=${id}`);
  return response.data;
};

export default getRelatedVideos;
