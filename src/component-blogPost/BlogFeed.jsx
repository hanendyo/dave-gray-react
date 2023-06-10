import React from "react";
import BlogCard from "./BlogCard";

const BlogFeed = ({ data }) => {
  return (
    <>
      <BlogCard data={data} />
    </>
  );
};

export default BlogFeed;
