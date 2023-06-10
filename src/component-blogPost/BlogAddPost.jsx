// import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

// ! CONTEXT
import React, { useContext, useRef } from "react";
import DataContext from "../context/DataContext";

// ! REDUX
import { useStoreActions, useStoreState } from "easy-peasy";
import { format } from "date-fns";

const BlogAddPost = () => {
  // const navigate = useNavigate();
  const inputRef = useRef();
  // ! context
  // const { title, setTitle, body, setBody, handleSubmit } =
  //   useContext(DataContext);
  const { state, dispatch, actions, handleSubmit } = useContext(DataContext);

  // ! redux
  // const data = useStoreState((state) => state.data);
  // const title = useStoreState((state) => state.title);
  // const setTitle = useStoreActions((actions) => actions.setTitle);
  // const body = useStoreState((state) => state.body);
  // const setBody = useStoreActions((actions) => actions.setBody);
  // const addPost = useStoreActions((actions) => actions.addPost);

  // const handleSubmit = () => {
  //   const id = data.length ? data[data.length - 1].id + 1 : 1;
  //   const currentDate = format(new Date(), "MMMM dd, yyyy pp");
  //   const newPost = { id, title, post: body, date: currentDate };
  //   addPost(newPost);
  //   navigate("/");
  // };

  return (
    <main>
      <div className="addPostContainer">
        <form onSubmit={handleSubmit}>
          <label>
            <h2>New Post</h2>
          </label>
          <p>Title</p>
          <input
            autoFocus
            required
            id="inputTitle"
            type="text"
            ref={inputRef}
            value={state.title}
            onChange={(e) => {
              // setTitle(e.target.value);
              dispatch({ type: actions.SET_TITLE, payload: e.target.value });
            }}
          />
          <p>Post</p>
          <textarea
            required
            id="inputPost"
            type="text"
            value={state.body}
            onChange={(e) => {
              // setBody(e.target.value);
              dispatch({ type: actions.SET_BODY, payload: e.target.value });
            }}
          />
          <button
            type="submit"
            onClick={() => {
              inputRef.current.focus();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default BlogAddPost;
