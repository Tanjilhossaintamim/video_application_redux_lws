import axiosInstance from "../../../utils/axios";

const getTags = async () => {
  const response = await axiosInstance("/tags");
  return response.data;
};

export default getTags;
