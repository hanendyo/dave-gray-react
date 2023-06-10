import React from "react";

const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className="searchForm">
      <label htmlFor="search">Search your item</label>
      <input
        id="searchItem"
        type="text"
        placeholder="Search your Item"
        role="searchbox"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
