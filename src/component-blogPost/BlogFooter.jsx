import React from "react";

const BlogFooter = ({ itemsLength }) => {
  const today = new Date();
  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
      {/* <p>
        {itemsLength} list {itemsLength <= 1 ? "item" : "items"}
      </p> */}
    </footer>
  );
};

export default BlogFooter;
