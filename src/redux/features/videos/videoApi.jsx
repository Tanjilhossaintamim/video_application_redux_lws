import axiosInstance from "../../../utils/axios";

const getVideos = async () => {
  const response = await axiosInstance("/videos");
  return response.data;
};

export default getVideos;
