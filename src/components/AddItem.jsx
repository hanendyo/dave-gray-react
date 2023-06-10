import React, { useRef } from "react";
import { FiPlus } from "react-icons/fi";

const AddItem = ({ handleSubmit, newItems, setNewItems }) => {
  const inputRef = useRef();
  return (
    <form className="addItem addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        required
        id="addItem"
        type="text"
        placeholder="Add Item"
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FiPlus />
      </button>
    </form>
  );
};

export default AddItem;
