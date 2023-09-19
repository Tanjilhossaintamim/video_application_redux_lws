import { useEffect } from "react";
import RelatedVideo from "./RelatedVideo";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../redux/features/relatedVideo/relatedVideoSlice";

const RelatedVideos = ({ currentVideoId, tags }) => {
  const { videos, isLoading } = useSelector((state) => state.relatedVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, currentVideoId }));
  }, [dispatch, currentVideoId, tags]);

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {!isLoading &&
        videos?.length > 0 &&
        videos.map((video) => <RelatedVideo key={video.id} video={video} />)}
    </div>
  );
};
RelatedVideos.propTypes = {
  currentVideoId: PropTypes.number,
  tags: PropTypes.array,
};
export default RelatedVideos;
