import React from "react";
import { VscTrash, VscEdit } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.itemName}
      </label>
      <VscTrash
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.itemName}`}
      />
    </li>
  );
};

export default LineItem;
