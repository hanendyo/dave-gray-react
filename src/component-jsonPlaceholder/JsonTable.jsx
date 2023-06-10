import React from "react";
import JsonTableRow from "./JsonTableRow";

const JsonTable = ({ items, buttonName }) => {
  return (
    <div className="jsonTable">
      <table border="1">
        <tbody>
          {items ? (
            <JsonTableRow
              key={items.id}
              items={items}
              buttonName={buttonName}
            />
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default JsonTable;
