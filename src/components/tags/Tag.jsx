import PropTypes from "prop-types";

const Tag = ({ tag }) => {
  const { title } = tag;

  return (
    <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
      {title}
    </div>
  );
};
Tag.propTypes = {
  tag: PropTypes.object,
};

export default Tag;
