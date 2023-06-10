import React from "react";
import JsonLineItems from "./JsonLineItems";

const JsonListItems = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <JsonLineItems item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default JsonListItems;
