import React from "react";
import colorName from "colornames";

const ColorInput = ({ input, setInput, hex, setHex }) => {
  return (
    <form className="addFormColor" onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        required
        id="inputColor"
        type="text"
        placeholder="add color name.."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setHex(colorName(e.target.value));
        }}
      />
    </form>
  );
};

export default ColorInput;
