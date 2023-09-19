import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { useEffect } from "react";
import { fetchTags } from "../../redux/features/tags/tagSlice";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, []);
  // decision making

  return tags.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
  redux
</div>; */
}
