import axiosInstance from "../../../utils/axios";

const getVideo = async (id) => {
  const response = await axiosInstance(`/videos/${id}`);
  return response.data;
};

export default getVideo;
