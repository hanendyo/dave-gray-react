import React from "react";
import { useContext } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import DataContext from "../context/DataContext";

const BlogHeader = () => {
  const { width } = useContext(DataContext);
  return (
    <header>
      <h1>Blog Post</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default BlogHeader;
