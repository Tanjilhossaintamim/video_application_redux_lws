import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  tag_removed,
  tag_selected,
} from "../../redux/features/filter/filterSlice";

const Tag = ({ tag }) => {
  const { title } = tag;
  const { selectedTags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const isSelected = selectedTags.includes(title);

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handelTagSelecte = () => {
    if (isSelected) {
      dispatch(tag_removed(title));
    } else {
      dispatch(tag_selected(title));
    }
  };

  return (
    <div onClick={handelTagSelecte} className={style}>
      {title}
    </div>
  );
};
Tag.propTypes = {
  tag: PropTypes.object,
};

export default Tag;
