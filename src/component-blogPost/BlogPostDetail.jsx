import { Link, useNavigate, useParams } from "react-router-dom";

// ! CONTEXT
import React, { useContext } from "react";
import DataContext from "../context/DataContext";

// ! REDUX
// import { useStoreActions, useStoreState } from "easy-peasy";

const BlogPostDetail = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  // ! context
  const { state, dispatch, actions, handleDelete } = useContext(DataContext);
  const { data } = state;
  const post = data.find((item) => item.id.toString() === id);

  // ! redux
  // const data = useStoreState((state) => state.data);
  // const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  // const setEditBody = useStoreActions((actions) => actions.setEditBody);
  // const deletePost = useStoreActions((actions) => actions.deletePost);
  // const post = data.find((item) => item.id.toString() === id);

  // const handleDelete = (id) => {
  //   deletePost(id);
  //   navigate("/");
  // };

  const handleClick = () => {
    // setEditTitle(post.title);
    // setEditBody(post.post);
    dispatch({ type: actions.SET_EDIT_TITLE, payload: post.title });
    dispatch({ type: actions.SET_EDIT_BODY, payload: post.post });
  };

  return (
    <main className="detailMain">
      <div className="blogPostDetail">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <h4>{post.post}</h4>
      </div>
      <div className="postButton">
        <Link to="/">
          <button onClick={(e) => handleDelete(id)}>Delete</button>
        </Link>
        <Link to={`/edit-post/${id}`}>
          <button onClick={handleClick}>Edit</button>
        </Link>
      </div>
    </main>
  );
};

export default BlogPostDetail;
