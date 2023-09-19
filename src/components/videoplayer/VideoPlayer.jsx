import PropTypes from "prop-types";

const VideoPlayer = ({ link, title }) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={link}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
VideoPlayer.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default VideoPlayer;
