// import { useEffect, useState } from "react";
// import Content from "./components/Content";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import AddItem from "./components/AddItem";
// import SearchItem from "./components/SearchItem";
// import ColorHeader from "./components-color/ColorHeader";
// import ColorContent from "./components-color/ColorContent";
// import apiRequest from "./api/ApiRequest";
// import JsonHeader from "./component-jsonPlaceholder/JsonHeader";
// import JsonFooter from "./component-jsonPlaceholder/JsonFooter";
// import JsonContent from "./component-jsonPlaceholder/JsonContent";
import BlogHeader from "./component-blogPost/BlogHeader";
import BlogFooter from "./component-blogPost/BlogFooter";
import BlogNavBar from "./component-blogPost/BlogNavBar";
import BlogAddPost from "./component-blogPost/BlogAddPost";
import BlogHome from "./component-blogPost/BlogHome";
import BlogPostDetail from "./component-blogPost/BlogPostDetail";
import BlogAbout from "./component-blogPost/BlogAbout";
import ErrorPage from "./component-blogPost/ErrorPage";
import BlogEditPost from "./component-blogPost/BlogEditPost";
import { Route, Routes, Link } from "react-router-dom";
// import { format } from "date-fns";
// import api from "./api/blogPosts";
// import useWindowSize from "./hooks/useWindowSize";
// import useAxiosFetch from "./hooks/useAxiosFetch";

//! REDUCER
import { DataProvider } from "./context/DataContext";
import useAxiosFetch from "./hooks/useAxiosFetch";

// ! REDUX
// import { useStoreActions } from "easy-peasy";

function App() {
  //! groceries variables
  // const API_URL = `http://localhost:3500/posts`;
  // const [items, setItems] = useState(
  //   JSON.parse(localStorage.getItem("shoppingList") || [])
  // );
  // const [newItems, setNewItems] = useState([]);
  // const [searchItem, setSearchItem] = useState("");
  // const [fetchError, setFetchError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchItems = async () => {
  //   try {
  //     const response = await fetch(API_URL);
  //     if (!response.ok) throw Error(`Error: expected data not recieved`);
  //     const listItems = await response.json();
  //     setItems(listItems);
  //     setFetchError(null);
  //   } catch (err) {
  //     setFetchError(err.message);
  //   } finally {
  //     setIsLoading();
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchItems();
  //   }, 2000);
  // }, []);

  // const addItem = async (item) => {
  //   const id = items.length ? items[items.length - 1].id + 1 : 1;
  //   const newItem = { id, checked: false, itemName: item };
  //   const newListItem = [...items, newItem];
  //   setItems(newListItem);

  //   const postOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newItem),
  //   };
  //   const result = await apiRequest(API_URL, postOptions);
  //   if (result) setFetchError(result);
  // };

  // const handleCheck = async (id) => {
  //   const listItems = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setItems(listItems);

  //   const myItem = listItems.filter((item) => item.id === id);
  //   const updateOptions = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": API_URL,
  //     },
  //     body: JSON.stringify({ checked: myItem[0].checked }),
  //   };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqUrl, updateOptions);
  //   if (result) setFetchError(result);
  // };

  // const handleDelete = async (id) => {
  //   const deleteItems = items.filter((item) => item.id !== id);
  //   setItems(deleteItems);

  //   const deleteOptions = {
  //     method: "DELETE",
  //   };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqUrl, deleteOptions);
  //   if (result) setFetchError(result);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newItems) return;
  //   setNewItems("");
  //   addItem(newItems);
  // };
  //!

  //! color input variables
  // const [input, setInput] = useState("");
  // const [hex, setHex] = useState("");
  // !

  // ! json placeholder
  // !

  // ! Blog Post
  // const [data, setData] = useState(
  //   JSON.parse(localStorage.getItem("postList")) || []
  // );
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const [date, setDate] = useState("");
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const navigate = useNavigate();
  // const { width } = useWindowSize();
  // const { fetchData, fetchError, isLoading } = useAxiosFetch(API_URL);

  // useEffect(() => {
  //   setData(fetchData);
  // }, [fetchData]);

  // ! AXIOS
  // const fetchPosts = async () => {
  //   try {
  //     const response = await api.get("/posts");
  //     setData(response.data);
  //     localStorage.setItem("postList", JSON.stringify(response.data));
  //   } catch (err) {
  //     if (err.respones) {
  //       // not 200
  //       console.log(err.response.data);
  //       console.log(err.response.status);
  //       console.log(err.response.headers);
  //     } else {
  //       console.log(`Error: `, err.message);
  //     }
  //   }
  // };

  // const fetch = async () => {
  //   try {
  //     const response = await fetch(API_URL);
  //     if (!response.ok) throw Error(`Error: expected data not recieved`);
  //     const listItems = await response.json();
  //     setData(listItems);
  //     setFetchError(null);
  //   } catch (err) {
  //     setFetchError(err.message);
  //   } finally {
  //     setIsLoading();
  //   }
  // };

  // const getCurrentDate = () => {
  //   let newDate = new Date();
  //   let date = newDate.getDate();
  //   let month = months[newDate.getMonth()];
  //   let year = newDate.getFullYear();
  //   let hour = newDate.getHours();
  //   let minute = newDate.getMinutes();
  //   let second = newDate.getSeconds();

  //   // check AM or PM
  //   const newFormat = hour >= 12 ? "PM" : "AM";

  //   // find current hour in AM/PM
  //   hour = hour % 12;

  //   // to display 0 or 12
  //   hour = hour ? hour : 12;
  //   hour = hour < 10 ? "0" + hour : hour;
  //   minute = minute < 10 ? "0" + minute : minute;
  //   second = second < 10 ? "0" + second : second;

  //   // merge
  //   let mergeHour = `${hour}:${minute}:${second} ${newFormat}`;

  //   setDate(`${month} ${date}, ${year} ${mergeHour}`);
  // };

  // const addPostData = async (title, body) => {
  //   const id = data.length ? data[data.length - 1].id + 1 : 1;
  //   const currentDate = format(new Date(), "MMMM dd, yyyy pp");
  //   const newItem = { id, title, post: body, date: currentDate };
  //   const newListItem = [...data, newItem];
  //   setData(newListItem);

  //   const postOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newItem),
  //   };
  //   const result = await apiRequest(API_URL, postOptions);
  //   if (result) setFetchError(result);
  // };

  // const axiosAddPostData = async (title, body) => {
  //   const id = data.length ? data[data.length - 1].id + 1 : 1;
  //   const currentDate = format(new Date(), "MMMM dd, yyyy pp");
  //   const newPost = { id, title, post: body, date: currentDate };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     const newPostsList = [...data, response.data];
  //     setData(newPostsList);
  //     localStorage.setItem("postList", JSON.stringify(newPostsList));
  //     setTitle("");
  //     setBody("");
  //     navigate("/");
  //   } catch (error) {
  //     console.log(`Error: `, error);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!data) return;
  //   axiosAddPostData(title, body);
  //   // addPostData(title, body);
  // };

  // const deletePostData = async (id) => {
  //   const localStorageIndex = data.findIndex((item) => item.id == id);
  //   if (localStorageIndex !== -1) {
  //     data.splice(localStorageIndex, 1);
  //     localStorage.setItem("postList", JSON.stringify(data));
  //   }

  //   const deleteOptions = {
  //     method: "DELETE",
  //   };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqUrl, deleteOptions);
  //   if (result) setFetchError(result);
  // };

  // const axiosDeletePostData = async (id) => {
  //   try {
  //     const localStorageIndex = data.findIndex((item) => item.id === id);
  //     if (localStorageIndex !== -1) {
  //       data.splice(localStorageIndex, 1);
  //       localStorage.setItem("postList", JSON.stringify(data));
  //     }
  //     await api.delete(`/posts/${id}`);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(`Error: `, error.message);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   // deletePostData(id);
  //   axiosDeletePostData(id);
  // };

  // const axiosEditPostData = async (id) => {
  //   const currentDate = format(new Date(), "MMMM dd, yyyy pp");
  //   const editedPost = {
  //     id,
  //     title: editTitle,
  //     post: editBody,
  //     date: currentDate,
  //   };
  //   try {
  //     const response = await api.put(`/posts/${id}`, editedPost);
  //     const newEditedData = data.map((post) =>
  //       post.id === id ? { ...response.data } : post
  //     );
  //     setData(newEditedData);
  //     localStorage.setItem("postList", JSON.stringify(newEditedData));
  //     setEditTitle("");
  //     setEditBody("");
  //     navigate("/");
  //   } catch (error) {
  //     console.log(`Error: `, error);
  //   }
  // };

  // const handleEdit = (id) => {
  //   if (!data) return;
  //   axiosEditPostData(id);
  // };

  // const handleCancel = () => {
  //   navigate("/");
  // };

  // // !

  // useEffect(() => {
  //   // fetchPosts();
  // }, []);

  // ! REDUX
  // const setData = useStoreActions((actions) => actions.setData);

  const { fetchData, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  // useEffect(() => {
  //   setData(fetchData);
  // }, [fetchData, setData]);

  return (
    <div className="App">
      {/* groceries list */}
      {/* <Header />
      <AddItem
        handleSubmit={handleSubmit}
        newItems={newItems}
        setNewItems={setNewItems}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <main>
        {isLoading && <p style={{ margin: "auto" }}>Loading data...</p>}
        {fetchError && (
          <p style={{ margin: "auto", color: "red" }}>{`${fetchError}`}</p>
        )}
        {!isLoading && !fetchError && (
          <Content
            // items={items}
            items={items.filter((item) =>
              item.itemName.toLowerCase().includes(searchItem.toLowerCase())
            )}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer itemsLength={items.length} /> */}
      {/*  */}
      {/* Color input */}
      {/* <ColorHeader />
      <ColorContent
        input={input}
        setInput={setInput}
        hex={hex}
        setHex={setHex}
      /> */}
      {/*  */}
      {/* json placeholder */}
      {/* <JsonHeader />
      <JsonContent />
      <JsonFooter /> */}
      {/*  */}
      {/* Blog Post */}
      <DataProvider>
        <BlogHeader />
        <BlogNavBar Link={Link} />
        <Routes>
          <Route
            exact
            path={"/"}
            element={<BlogHome fetchError={fetchError} isLoading={isLoading} />}
          ></Route>
          <Route exact path="/post" element={<BlogAddPost />}></Route>
          <Route path="/post/:id" element={<BlogPostDetail />}></Route>
          <Route path="/edit-post/:id" element={<BlogEditPost />}></Route>
          <Route exact path="/about" element={<BlogAbout />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <BlogFooter />
      </DataProvider>
      {/*  */}
    </div>
  );
}

export default App;
