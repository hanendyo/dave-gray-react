import { createStore, action, thunk, computed } from "easy-peasy";
import api from "../api/blogPosts";

export default createStore({
  data: JSON.parse(localStorage.getItem("postList")) || [],
  setData: action((state, payload) => {
    state.data = payload;
  }),
  searchItem: "",
  setSearchItem: action((state, payload) => {
    state.searchItem = payload;
  }),
  searchResult: [],
  setSearchResult: action((state, payload) => {
    state.searchResult = payload;
  }),
  title: "",
  setTitle: action((state, payload) => {
    state.title = payload;
  }),
  body: "",
  setBody: action((state, payload) => {
    state.body = payload;
  }),
  editTitle: "",
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),
  editBody: "",
  setEditBody: action((state, payload) => {
    state.editBody = payload;
  }),
  postCount: computed((state) => state.data.length),
  getPostById: computed((state) => {
    return (id) => state.data.find((data) => data.id.toString === id);
  }),
  addPost: thunk(async (actions, newPost, helpers) => {
    const { data } = helpers.getState();
    try {
      const response = await api.post("/posts", newPost);
      const newPostsList = [...data, response.data];
      actions.setData(newPostsList);
      localStorage.setItem("postList", JSON.stringify(newPostsList));
      actions.setTitle("");
      actions.setBody("");
    } catch (error) {
      console.log(`Error: `, error);
    }
  }),
  deletePost: thunk(async (actions, id, helpers) => {
    const { data } = helpers.getState();
    try {
      const deletedPost = data.filter((item) => String(item.id) !== id);
      actions.setData(deletedPost);
      localStorage.setItem("postList", JSON.stringify(deletedPost));
      await api.delete(`/posts/${id}`);
    } catch (error) {
      console.log(`Error: `, error.message);
    }
  }),
  editPost: thunk(async (actions, editedPost, helpers) => {
    const { data } = helpers.getState();
    const { id } = editedPost;
    try {
      const response = await api.put(`/posts/${id}`, editedPost);
      const newEditedData = data.map((post) =>
        post.id.toString() === id ? { ...response.data } : post
      );
      actions.setData(newEditedData);
      localStorage.setItem("postList", JSON.stringify(newEditedData));
      actions.setEditTitle("");
      actions.setEditBody("");
    } catch (error) {
      console.log(`Error: `, error);
    }
  }),
});
