import React from "react";
import JsonTableCell from "./JsonTableCell";

const JsonTableRow = ({ items, buttonName }) => {
  return items.map((item) => {
    return (
      <tr key={item.id} style={{ textAlign: "center" }}>
        <JsonTableCell key={item.id} item={item} buttonName={buttonName} />
      </tr>
    );
  });
};

export default JsonTableRow;
