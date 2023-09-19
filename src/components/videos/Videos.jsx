import { useDispatch, useSelector } from "react-redux";
import Video from "./Video";
import { useEffect } from "react";
import { fetchVideos } from "../../redux/features/videos/videosSlice";
import Loading from "../ui/Pagination/Loading";

const Videos = () => {
  const { videos, isLoading, error, isError } = useSelector(
    (state) => state.videos
  );
  const { selectedTags, search } = useSelector((state) => state.filter);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos({ selectedTags, search }));
  }, [selectedTags, search, dispatch]);
  // desicion making
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && videos?.length == 0)
    content = <div>No Videos Found !</div>;
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {content}
          {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
        </div>
      </section>
    </section>
  );
};

export default Videos;
