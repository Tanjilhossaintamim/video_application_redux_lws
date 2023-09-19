import { useState } from "react";
import searchimg from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../redux/features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";
const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const matched = useMatch("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelSearch = (e) => {
    e.preventDefault();

    dispatch(searched(input));
    // location check if user not in home page then it will redirect home page
    if (!matched) {
      navigate("/");
    }
  };
  return (
    <>
      <form onSubmit={handelSearch}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <img className="inline h-4 cursor-pointer" src={searchimg} alt="Search" />
    </>
  );
};

export default Search;
