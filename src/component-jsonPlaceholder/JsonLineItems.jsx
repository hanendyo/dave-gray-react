import React from "react";

const JsonLineItems = ({ item }) => {
  return <li>{JSON.stringify(item)}</li>;
};

export default JsonLineItems;
