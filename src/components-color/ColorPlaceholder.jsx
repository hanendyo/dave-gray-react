import React from "react";

const ColorPlaceholder = ({ input, hex }) => {
  return (
    <label className="colorPlaceholder" style={{ backgroundColor: input }}>
      {input ? input : "Empty Value"}
      {hex ? hex : null}
    </label>
  );
};

export default ColorPlaceholder;
