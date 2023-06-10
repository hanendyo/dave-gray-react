import React from "react";
import ColorPlaceholder from "./ColorPlaceholder";
import ColorInput from "./ColorInput";

const ColorContent = ({ input, setInput, hex, setHex }) => {
  return (
    <main className="colorContainer">
      <ColorPlaceholder input={input} hex={hex} />
      <ColorInput input={input} setInput={setInput} hex={hex} setHex={setHex} />
    </main>
  );
};

export default ColorContent;
