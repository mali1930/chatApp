import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="search"
        placeholder="Find a user"
        className="border-b-2 bg-transparent text-white outline-0  py-2 mb-12 px-2 w-[100%] "
      />
    </div>
  );
};

export default SearchBar;
