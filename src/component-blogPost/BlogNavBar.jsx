// ! REDUX
// import { useStoreActions, useStoreState } from "easy-peasy";
// ! CONTEXT
import React, { useContext } from "react";
import DataContext from "../context/DataContext";

// ! REDUX EASY-PEASY
const BlogNavBar = ({ Link }) => {
  // ! context
  const { state, dispatch, actions } = useContext(DataContext);
  const { searchItem } = state;

  // ! redux easy-peasy start
  // const data = useStoreState((state) => state.data);
  // const searchItem = useStoreState((state) => state.searchItem);
  // const setSearchItem = useStoreActions((actions) => actions.setSearchItem);
  // const setSearchResult = useStoreActions((actions) => actions.setSearchResult);

  // useEffect(() => {
  //   const filteredSearch = data.filter(
  //     (item) =>
  //       item.title.toLowerCase().includes(searchItem?.toLowerCase()) ||
  //       item.post.toLowerCase().includes(searchItem?.toLowerCase())
  //   );

  //   setSearchResult(filteredSearch.reverse());
  // }, [searchItem, data, setSearchResult]);
  // ! redux easy-peasy end

  return (
    <div className="navContainer">
      <div className="navSearch">
        <form>
          <input
            id="searchItem"
            type="text"
            placeholder="Search your post..."
            role="searchbox"
            value={searchItem}
            onChange={(e) => {
              // setSearchItem(e.target.value)
              dispatch({
                type: actions.SET_SEARCH_ITEM,
                payload: e.target.value,
              });
            }}
          />
        </form>
      </div>
      <div className="navOptions">
        <Link to="/" className="navLink">
          <p>Home</p>
        </Link>
        <Link to="/post" className="navLink">
          <p>Post</p>
        </Link>
        <Link to="/about" className="navLink">
          <p>About</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogNavBar;
