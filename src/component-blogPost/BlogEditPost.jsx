import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

// ! CONTEXT
import React, { useContext, useRef } from "react";
import DataContext from "../context/DataContext";

// ! REDUX
// import { useStoreActions, useStoreState } from "easy-peasy";

const BlogEditPost = () => {
  // ! context
  const { state, dispatch, actions, handleEdit, handleCancel } =
    useContext(DataContext);

  const { data, editTitle, editBody } = state;

  // ! redux
  // const data = useStoreState((state) => state.data);
  // const editTitle = useStoreState((state) => state.editTitle);
  // const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  // const editBody = useStoreState((state) => state.editBody);
  // const setEditBody = useStoreActions((actions) => actions.setEditBody);
  // const editPost = useStoreActions((actions) => actions.editPost);
  // const getPostById = useStoreState((state) => state.getPostById);
  // const post = getPostById(id);

  const navigate = useNavigate();
  const inputRef = useRef();
  const { id } = useParams();
  const post = data.find((item) => item.id.toString() === id);

  // const handleEdit = () => {
  //   const currentDate = format(new Date(), "MMMM dd, yyyy pp");
  //   const editedPost = {
  //     id,
  //     title: editTitle,
  //     post: editBody,
  //     date: currentDate,
  //   };
  //   editPost(editedPost);
  //   navigate("/");
  // };

  // const handleCancel = () => {
  //   navigate("/");
  // };

  return (
    <main>
      <div className="addPostContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <h2>Edit Post</h2>
          </label>
          <p>Title</p>
          <input
            autoFocus
            required
            id="inputTitle"
            type="text"
            ref={inputRef}
            value={editTitle}
            onChange={(e) => {
              // setEditTitle(e.target.value);
              dispatch({
                type: actions.SET_EDIT_TITLE,
                payload: e.target.value,
              });
            }}
          />
          <p>Post</p>
          <textarea
            required
            id="inputPost"
            type="text"
            value={editBody}
            onChange={(e) => {
              dispatch({
                type: actions.SET_EDIT_BODY,
                payload: e.target.value,
              });
            }}
          />
          <div className="editPostButton">
            <button
              type="submit"
              onClick={() => {
                inputRef.current.focus();
                handleEdit(post.id);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                inputRef.current.focus();
                handleCancel();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default BlogEditPost;
