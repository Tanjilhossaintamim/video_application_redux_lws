import { useDispatch, useSelector } from "react-redux";
import RelatedVideos from "../components/relatedVideo/RelatedVideos";
import VideoDescription from "../components/videodescription/VideoDescription";
import VideoPlayer from "../components/videoplayer/VideoPlayer";
import { useEffect } from "react";
import { fetchVideo } from "../redux/features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Pagination/Loading";

const VideoPage = () => {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [videoId, dispatch]);

  const { id, tags, link, title } = video || {};
  // decision making
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && !video?.id)
    content = <div>No Videos Found !</div>;
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}

          <VideoPlayer link={link} title={title} />
          {/* <!-- video description --> */}
          <VideoDescription video={video} />
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideos currentVideoId={id} tags={tags} />
      </div>
    );
  }
  document.title = title;
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default VideoPage;
