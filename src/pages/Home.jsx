import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination/Pagination";
import Videos from "../components/videos/Videos";
const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <Videos />
      <Pagination />
    </>
  );
};

export default Home;
