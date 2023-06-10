import { format } from "date-fns";
import {
  useEffect,
  useState,
  createContext,
  useReducer,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/blogPosts";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

export const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

const initialState = {
  data: JSON.parse(localStorage.getItem("postList")) || [],
  searchItem: "",
  searchResult: [],
  title: "",
  body: "",
  editTitle: "",
  editBody: "",
};

const actions = {
  SET_DATA: "SET_DATA",
  SET_SEARCH_ITEM: "SET_SEARCH_ITEM",
  SET_SEARCH_RESULT: "SET_SEARCH_RESULT",
  SET_TITLE: "SET_TITLE",
  SET_BODY: "SET_BODY",
  SET_EDIT_TITLE: "SET_EDIT_TITLE",
  SET_EDIT_BODY: "SET_EDIT_BODY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DATA:
      return { ...state, data: action.payload };
    case actions.SET_TITLE:
      return { ...state, title: action.payload };
    case actions.SET_BODY:
      return { ...state, body: action.payload };
    case actions.SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    case actions.SET_SEARCH_ITEM:
      return { ...state, searchItem: action.payload };
    case actions.SET_EDIT_TITLE:
      return { ...state, editTitle: action.payload };
    case actions.SET_EDIT_BODY:
      return { ...state, editBody: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { fetchData, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  // ! REDUCER
  const [state, dispatch] = useReducer(reducer, initialState);

  // ! PLAIN USESTATE
  // const [data, setData] = useState(
  //   JSON.parse(localStorage.getItem("postList")) || []
  // );
  // const [searchItem, setSearchItem] = useState("");
  // const [searchResult, setSearchResult] = useState("");
  // // const [title, setTitle] = useState("");
  // // const [body, setBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");

  useEffect(() => {
    if (!state.data) {
      // setData(fetchData);
      dispatch({ type: actions.SET_DATA, payload: fetchData });
    }

    const filteredSearch = state.data.filter(
      (item) =>
        item.title.toLowerCase().includes(state.searchItem?.toLowerCase()) ||
        item.post.toLowerCase().includes(state.searchItem?.toLowerCase())
    );

    // setSearchResult(filteredSearch.reverse());
    dispatch({
      type: actions.SET_SEARCH_RESULT,
      payload: filteredSearch.reverse(),
    });
  }, [state.searchItem, state.data, fetchData]);

  const axiosAddPostData = async (title, body) => {
    const id = state.data.length ? state.data[state.data.length - 1].id + 1 : 1;
    const currentDate = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title, post: body, date: currentDate };
    try {
      const response = await api.post("/posts", newPost);
      const newPostsList = [...state.data, response.data];
      // setData(newPostsList);
      dispatch({ type: actions.SET_DATA, payload: newPostsList });
      localStorage.setItem("postList", JSON.stringify(newPostsList));
      // setTitle("");
      // setBody("");
      dispatch({ type: actions.SET_TITLE, payload: "" });
      dispatch({ type: actions.SET_BODY, payload: "" });
      navigate("/");
    } catch (error) {
      console.log(`Error: `, error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.data) return;
    axiosAddPostData(state.title, state.body);
    // addPostData(title, body);
  };

  const axiosDeletePostData = async (id) => {
    try {
      const deletedPost = state.data.filter((item) => String(item.id) !== id);
      // setData(deletedPost);
      dispatch({ type: actions.SET_DATA, payload: deletedPost });
      localStorage.setItem("postList", JSON.stringify(deletedPost));
      await api.delete(`/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.log(`Error: `, error.message);
    }
  };

  const handleDelete = async (id) => {
    // deletePostData(id);
    axiosDeletePostData(id);
  };

  const axiosEditPostData = async (id) => {
    const currentDate = format(new Date(), "MMMM dd, yyyy pp");
    const editedPost = {
      id,
      title: state.editTitle,
      post: state.editBody,
      date: currentDate,
    };
    try {
      const response = await api.put(`/posts/${id}`, editedPost);
      const newEditedData = state.data.map((post) =>
        post.id === id ? { ...response.data } : post
      );
      // setData(newEditedData);
      dispatch({ type: actions.SET_DATA, payload: newEditedData });
      localStorage.setItem("postList", JSON.stringify(newEditedData));
      // setEditTitle("");
      // setEditBody("");
      dispatch({ type: actions.SET_EDIT_TITLE, payload: "" });
      dispatch({ type: actions.SET_EDIT_BODY, payload: "" });
      navigate("/");
    } catch (error) {
      console.log(`Error: `, error);
    }
  };

  const handleEdit = (id) => {
    if (!state.data) return;
    axiosEditPostData(id);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        actions,
        width,
        // data,
        // setData,
        // searchItem,
        // setSearchItem,
        // searchResult,
        // title,
        // setTitle,
        // body,
        // setBody,
        // editTitle,
        // setEditTitle,
        // editBody,
        // setEditBody,
        fetchError,
        isLoading,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleCancel,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
