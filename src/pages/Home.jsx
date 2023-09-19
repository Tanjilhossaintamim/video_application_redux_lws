import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination/Pagination";
import Videos from "../components/videos/Videos";

const Home = () => {
  document.title = "Home";
  return (
    <>
      <Tags />
      <Videos />
      <Pagination />
    </>
  );
};

export default Home;
