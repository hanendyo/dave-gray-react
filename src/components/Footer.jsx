import React from "react";

const Footer = ({ itemsLength }) => {
  const today = new Date();
  return (
    <footer>
      {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
      <p>
        {itemsLength} list {itemsLength <= 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;
