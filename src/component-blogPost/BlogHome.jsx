import BlogFeed from "./BlogFeed";

// ! CONTEXT
import React, { useContext } from "react";
import DataContext from "../context/DataContext";

// ! REDUX
import { useStoreState } from "easy-peasy";

const BlogHome = () =>
  // { fetchError, isLoading }
  {
    // ! context
    const { state, dispatch, actions, fetchError, isLoading } =
      useContext(DataContext);

    const { searchResult } = state;

    // ! redux
    // const searchResult = useStoreState((state) => state.searchResult);

    return (
      <main className="home">
        {isLoading && <p className="statusMessage">Loading data...</p>}
        {!isLoading && fetchError && (
          <p className="statusMessage" style={{ color: "red" }}>
            {fetchError}
          </p>
        )}
        {!isLoading && !fetchError && searchResult.length < 1 && (
          <p className="statusMessage">no post to display</p>
        )}
        {!isLoading && !fetchError && searchResult.length > 0 && (
          <BlogFeed data={searchResult} />
        )}
      </main>
    );
  };

export default BlogHome;
