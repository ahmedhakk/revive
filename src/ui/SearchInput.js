import React from "react";
import classes from "./SearchInput.module.css"; // This imports the CSS from a separate file.

const SearchInput = () => {
  return (
    <div className={classes.searchInputContainer}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchInput;
