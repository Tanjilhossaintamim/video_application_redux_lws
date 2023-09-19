import axiosInstance from "../../../utils/axios";

const getVideos = async ({ selectedTags, search }) => {
  let queryString = "";
  if (selectedTags?.length > 0) {
    queryString += selectedTags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search != "") {
    queryString += `&q=${search}`;
  }
  console.log(search);
  const response = await axiosInstance(`/videos?${queryString}`);
  return response.data;
};

export default getVideos;
