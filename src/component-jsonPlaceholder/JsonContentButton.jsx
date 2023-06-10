import React from "react";

const JsonContentButton = ({ buttonName, setButtonName, fetchItems }) => {
  return (
    <button
      className="jsonContentButton"
      type="submit"
      aria-label="Json Content"
      onClick={(e) => {
        e.preventDefault();
        setButtonName(buttonName);
        fetchItems();
      }}
    >
      {buttonName}
    </button>
  );
};

export default JsonContentButton;
